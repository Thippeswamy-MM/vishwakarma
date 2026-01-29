const mongoose = require('mongoose');

const warrantySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  warrantyNumber: {
    type: String,
    required: true,
    unique: true
  },
  serialNumber: {
    type: String,
    required: true,
    unique: true
  },
  purchaseDate: {
    type: Date,
    required: true
  },
  installationDate: {
    type: Date
  },
  expiryDate: {
    type: Date,
    required: true
  },
  dealerName: {
    type: String,
    required: true
  },
  dealerContact: {
    type: String,
    required: true
  },
  installationAddress: {
    name: String,
    phone: String,
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
      country: { type: String, default: 'India' }
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  status: {
    type: String,
    enum: ['active', 'expired', 'claim-pending', 'claim-in-progress', 'void'],
    default: 'active'
  },
  claims: [{
    issue: {
      type: String,
      required: true
    },
    issueType: {
      type: String,
      enum: ['manufacturing-defect', 'performance-issue', 'damage', 'other'],
      required: true
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'urgent'],
      default: 'medium'
    },
    description: String,
    attachments: [{
      filename: String,
      url: String,
      mimeType: String,
      size: Number
    }],
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'resolved', 'rejected'],
      default: 'pending'
    },
    submittedAt: {
      type: Date,
      default: Date.now
    },
    resolvedAt: Date,
    resolvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    resolution: String,
    notes: String,
    technician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    partsReplaced: [{
      partName: String,
      partNumber: String,
      quantity: Number,
      cost: Number
    }],
    laborHours: Number,
    laborCost: Number,
    totalCost: Number
  }],
  documents: [{
    type: {
      type: String,
      enum: ['warranty-card', 'invoice', 'service-report', 'photo', 'other'],
      required: true
    },
    name: String,
    url: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  serviceHistory: [{
    date: {
      type: Date,
      required: true
    },
    type: {
      type: String,
      enum: ['installation', 'maintenance', 'repair', 'inspection'],
      required: true
    },
    description: String,
    technician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    partsUsed: [{
      name: String,
      quantity: Number,
      cost: Number
    }],
    laborHours: Number,
    cost: Number,
    notes: String,
    documents: [String]
  }],
  extendedWarranty: {
    purchased: {
      type: Boolean,
      default: false
    },
    purchaseDate: Date,
    expiryDate: Date,
    duration: Number, // in months
    cost: Number,
    provider: String,
    policyNumber: String
  },
  notes: String,
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for faster queries
warrantySchema.index({ user: 1 });
warrantySchema.index({ product: 1 });
warrantySchema.index({ warrantyNumber: 1 });
warrantySchema.index({ serialNumber: 1 });
warrantySchema.index({ status: 1 });
warrantySchema.index({ expiryDate: 1 });

// Virtual for days until expiry
warrantySchema.virtual('daysUntilExpiry').get(function() {
  const now = new Date();
  const diffTime = this.expiryDate - now;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
});

// Virtual for is expired
warrantySchema.virtual('isExpired').get(function() {
  return this.expiryDate < new Date();
});

// Virtual for active claims count
warrantySchema.virtual('activeClaimsCount').get(function() {
  return this.claims.filter(claim => claim.status !== 'resolved' && claim.status !== 'rejected').length;
});

// Pre-save middleware to check expiry
warrantySchema.pre('save', function(next) {
  if (this.expiryDate < new Date() && this.status === 'active') {
    this.status = 'expired';
  }
  next();
});

module.exports = mongoose.model('Warranty', warrantySchema);
