const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderNumber: {
    type: String,
    unique: true,
    required: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    variant: {
      name: String,
      specifications: mongoose.Schema.Types.Mixed
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1']
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price cannot be negative']
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, 'Discount cannot be negative']
    },
    total: {
      type: Number,
      required: true
    }
  }],
  pricing: {
    subtotal: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      default: 0
    },
    tax: {
      type: Number,
      default: 0
    },
    shipping: {
      type: Number,
      default: 0
    },
    installation: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      required: true
    }
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'manufacturing', 'quality-check', 'ready', 'shipped', 'delivered', 'installed', 'completed', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'partial', 'paid', 'refunded', 'failed'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['bank-transfer', 'cash-on-delivery', 'cheque', 'demand-draft', 'online', 'emi'],
    required: true
  },
  paymentDetails: {
    transactionId: String,
    paymentDate: Date,
    amount: Number,
    method: String,
    status: String,
    notes: String
  },
  shippingAddress: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      pincode: {
        type: String,
        required: true
      },
      country: {
        type: String,
        default: 'India'
      }
    },
    landmarks: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  billingAddress: {
    name: String,
    phone: String,
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
      country: { type: String, default: 'India' }
    },
    gstNumber: String,
    panNumber: String
  },
  timeline: [{
    status: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    date: {
      type: Date,
      default: Date.now
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    attachments: [{
      type: String,
      url: String
    }]
  }],
  installation: {
    required: {
      type: Boolean,
      default: false
    },
    scheduledDate: Date,
    completedDate: Date,
    technician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    notes: String,
    photos: [String]
  },
  warranty: {
    registered: {
      type: Boolean,
      default: false
    },
    registrationDate: Date,
    warrantyNumber: String,
    expiryDate: Date
  },
  documents: [{
    type: {
      type: String,
      enum: ['invoice', 'receipt', 'warranty-card', 'manual', 'test-certificate', 'other'],
      required: true
    },
    name: String,
    url: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  notes: {
    customer: String,
    internal: String
  },
  estimatedDelivery: {
    startDate: Date,
    endDate: Date
  },
  actualDelivery: Date,
  tracking: {
    shippingProvider: String,
    trackingNumber: String,
    trackingUrl: String,
    updates: [{
      date: Date,
      status: String,
      location: String,
      description: String
    }]
  },
  cancellation: {
    reason: String,
    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    requestedAt: Date,
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    approvedAt: Date,
    refundAmount: Number,
    refundStatus: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'failed'],
      default: 'pending'
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for faster queries
orderSchema.index({ user: 1 });
orderSchema.index({ orderNumber: 1 });
orderSchema.index({ status: 1 });
orderSchema.index({ paymentStatus: 1 });
orderSchema.index({ createdAt: -1 });
orderSchema.index({ 'shippingAddress.pincode': 1 });

// Pre-save middleware to generate order number
orderSchema.pre('save', async function(next) {
  if (this.isNew && !this.orderNumber) {
    const count = await this.constructor.countDocuments();
    this.orderNumber = `VFW${String(count + 1).padStart(6, '0')}`;
  }
  next();
});

// Virtual for total items
orderSchema.virtual('totalItems').get(function() {
  return this.items.reduce((total, item) => total + item.quantity, 0);
});

// Virtual for order progress percentage
orderSchema.virtual('progressPercentage').get(function() {
  const statusProgress = {
    'pending': 0,
    'confirmed': 10,
    'manufacturing': 30,
    'quality-check': 50,
    'ready': 70,
    'shipped': 85,
    'delivered': 90,
    'installed': 95,
    'completed': 100,
    'cancelled': 0
  };
  return statusProgress[this.status] || 0;
});

module.exports = mongoose.model('Order', orderSchema);
