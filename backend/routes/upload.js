const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const auth = require('../middleware/auth');

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure storage for different file types
const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'vishwakarma-foundry/products',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [
      { width: 1200, height: 800, crop: 'limit', quality: 'auto' },
      { fetch_format: 'auto' }
    ]
  }
});

const documentStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'vishwakarma-foundry/documents',
    allowed_formats: ['pdf', 'doc', 'docx'],
    resource_type: 'auto'
  }
});

// Initialize multer
const uploadImage = multer({
  storage: imageStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

const uploadDocument = multer({
  storage: documentStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and Word documents are allowed'), false);
    }
  }
});

// @route   POST /api/upload/images
// @desc    Upload multiple images
// @access  Private
router.post('/images', auth, uploadImage.array('images', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No images uploaded'
      });
    }

    const uploadedImages = req.files.map(file => ({
      url: file.path,
      publicId: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimeType: file.mimetype
    }));

    res.json({
      success: true,
      message: 'Images uploaded successfully',
      images: uploadedImages
    });
  } catch (error) {
    console.error('Image upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading images'
    });
  }
});

// @route   POST /api/upload/documents
// @desc    Upload documents
// @access  Private
router.post('/documents', auth, uploadDocument.array('documents', 5), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No documents uploaded'
      });
    }

    const uploadedDocuments = req.files.map(file => ({
      url: file.path,
      publicId: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimeType: file.mimetype
    }));

    res.json({
      success: true,
      message: 'Documents uploaded successfully',
      documents: uploadedDocuments
    });
  } catch (error) {
    console.error('Document upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading documents'
    });
  }
});

// @route   POST /api/upload/product-gallery
// @desc    Upload product gallery with optimization
// @access  Private
router.post('/product-gallery', auth, uploadImage.array('gallery', 8), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No images uploaded'
      });
    }

    // Process images with Sharp for optimization
    const processedImages = await Promise.all(
      req.files.map(async (file, index) => {
        // Create different sizes
        const sizes = [
          { name: 'thumbnail', width: 150, height: 150 },
          { name: 'medium', width: 500, height: 400 },
          { name: 'large', width: 1200, height: 800 }
        ];

        const processedSizes = {};
        
        for (const size of sizes) {
          const buffer = await sharp(file.buffer)
            .resize(size.width, size.height, { 
              fit: 'cover',
              position: 'center'
            })
            .jpeg({ quality: 80 })
            .toBuffer();

          // Upload each size to Cloudinary
          const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
              {
                folder: `vishwakarma-foundry/products/${size.name}`,
                public_id: `${file.filename}_${size.name}`,
                resource_type: 'image'
              },
              (error, result) => {
                if (error) reject(error);
                else resolve(result);
              }
            ).end(buffer);
          });

          processedSizes[size.name] = {
            url: result.secure_url,
            publicId: result.public_id,
            width: size.width,
            height: size.height
          };
        }

        return {
          original: {
            url: file.path,
            publicId: file.filename,
            originalName: file.originalname,
            size: file.size,
            mimeType: file.mimetype
          },
          processed: processedSizes,
          order: index
        };
      })
    );

    res.json({
      success: true,
      message: 'Product gallery uploaded and processed successfully',
      images: processedImages
    });
  } catch (error) {
    console.error('Gallery upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading gallery'
    });
  }
});

// @route   DELETE /api/upload/:publicId
// @desc    Delete uploaded file
// @access  Private
router.delete('/:publicId', auth, async (req, res) => {
  try {
    const { publicId } = req.params;

    // Delete from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === 'ok') {
      res.json({
        success: true,
        message: 'File deleted successfully'
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'File not found or already deleted'
      });
    }
  } catch (error) {
    console.error('File deletion error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting file'
    });
  }
});

// @route   GET /api/upload/info/:publicId
// @desc    Get file information
// @access  Private
router.get('/info/:publicId', auth, async (req, res) => {
  try {
    const { publicId } = req.params;

    const result = await cloudinary.api.resource(publicId);

    res.json({
      success: true,
      file: {
        publicId: result.public_id,
        url: result.secure_url,
        format: result.format,
        size: result.bytes,
        width: result.width,
        height: result.height,
        createdAt: result.created_at
      }
    });
  } catch (error) {
    console.error('File info error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching file information'
    });
  }
});

module.exports = router;
