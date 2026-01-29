const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [200, 'Product name cannot exceed 200 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  shortDescription: {
    type: String,
    maxlength: [500, 'Short description cannot exceed 500 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['grain-processor', 'storage-tank', 'threshing-machine', 'spare-parts', 'other']
  },
  subcategory: {
    type: String,
    enum: ['half-dala', 'balwan-bhoosi', 'vfw-half-dala', 'custom']
  },
  specifications: {
    capacity: {
      type: String,
      required: [true, 'Capacity is required']
    },
    power: {
      type: String,
      required: [true, 'Power requirement is required']
    },
    size: {
      type: String,
      required: [true, 'Size is required']
    },
    material: {
      type: String,
      default: 'Heavy Iron & Steel'
    },
    weight: String,
    dimensions: {
      length: String,
      width: String,
      height: String
    },
    operatingConditions: {
      temperature: String,
      humidity: String,
      powerSource: String
    }
  },
  pricing: {
    basePrice: {
      type: Number,
      required: [true, 'Base price is required'],
      min: [0, 'Price cannot be negative']
    },
    discountPrice: Number,
    currency: {
      type: String,
      default: 'INR'
    },
    taxIncluded: {
      type: Boolean,
      default: true
    }
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: String,
    isPrimary: {
      type: Boolean,
      default: false
    },
    order: Number
  }],
  videos: [{
    url: String,
    title: String,
    duration: String
  }],
  features: [{
    title: String,
    description: String,
    icon: String
  }],
  benefits: [{
    title: String,
    description: String
  }],
  applications: [{
    industry: String,
    description: String
  }],
  warranty: {
    duration: Number, // in months
    description: String,
    terms: String
  },
  availability: {
    inStock: {
      type: Boolean,
      default: true
    },
    quantity: {
      type: Number,
      default: 0
    },
    manufacturingTime: String, // e.g., "2-3 weeks"
    deliveryTime: String // e.g., "1-2 weeks"
  },
  seo: {
    title: String,
    description: String,
    keywords: [String],
    ogImage: String
  },
  status: {
    type: String,
    enum: ['draft', 'active', 'discontinued'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  popular: {
    type: Boolean,
    default: false
  },
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: String,
    images: [String],
    verified: {
      type: Boolean,
      default: false
    },
    helpful: {
      type: Number,
      default: 0
    }
  }],
  tags: [String],
  relatedProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  variants: [{
    name: String,
    specifications: mongoose.Schema.Types.Mixed,
    price: Number,
    images: [String]
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for faster queries
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1, subcategory: 1 });
productSchema.index({ status: 1, featured: 1 });
productSchema.index({ 'pricing.basePrice': 1 });
productSchema.index({ slug: 1 });

// Virtual for discounted price
productSchema.virtual('discountedPrice').get(function() {
  if (this.pricing.discountPrice && this.pricing.discountPrice < this.pricing.basePrice) {
    return this.pricing.discountPrice;
  }
  return this.pricing.basePrice;
});

// Virtual for discount percentage
productSchema.virtual('discountPercentage').get(function() {
  if (this.pricing.discountPrice && this.pricing.discountPrice < this.pricing.basePrice) {
    return Math.round(((this.pricing.basePrice - this.pricing.discountPrice) / this.pricing.basePrice) * 100);
  }
  return 0;
});

// Pre-save middleware to generate slug
productSchema.pre('save', function(next) {
  if (this.isModified('name') && !this.slug) {
    const slugify = require('slugify');
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
