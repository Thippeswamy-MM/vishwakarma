const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: [true, 'Inquiry type is required'],
    enum: ['general', 'product', 'technical', 'warranty', 'complaint', 'feedback', 'factory-visit']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [200, 'Subject cannot exceed 200 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'resolved', 'closed'],
    default: 'pending'
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  contactInfo: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    company: String,
    address: String
  },
  attachments: [{
    filename: String,
    originalName: String,
    url: String,
    size: Number,
    mimeType: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  responses: [{
    message: {
      type: String,
      required: true
    },
    responder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    responderRole: {
      type: String,
      enum: ['admin', 'manager', 'support'],
      required: true
    },
    attachments: [{
      filename: String,
      url: String,
      mimeType: String
    }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  escalationLevel: {
    type: Number,
    default: 0,
    max: 3
  },
  resolution: {
    summary: String,
    resolvedAt: Date,
    resolvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    customerSatisfaction: {
      type: Number,
      min: 1,
      max: 5
    },
    feedback: String
  },
  metadata: {
    source: {
      type: String,
      enum: ['website', 'email', 'phone', 'social-media', 'referral'],
      default: 'website'
    },
    ipAddress: String,
    userAgent: String,
    referrer: String,
    utmSource: String,
    utmMedium: String,
    utmCampaign: String
  },
  followUpRequired: {
    type: Boolean,
    default: false
  },
  followUpDate: Date,
  tags: [String],
  internalNotes: [{
    note: String,
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for faster queries
inquirySchema.index({ user: 1 });
inquirySchema.index({ type: 1, status: 1 });
inquirySchema.index({ priority: 1, status: 1 });
inquirySchema.index({ createdAt: -1 });
inquirySchema.index({ assignedTo: 1 });

// Virtual for response time
inquirySchema.virtual('responseTime').get(function() {
  if (this.responses.length > 0) {
    const firstResponse = this.responses[0];
    return Math.floor((firstResponse.createdAt - this.createdAt) / (1000 * 60 * 60)); // in hours
  }
  return null;
});

// Virtual for isOverdue
inquirySchema.virtual('isOverdue').get(function() {
  const now = new Date();
  const responseTimeLimit = this.priority === 'urgent' ? 2 : this.priority === 'high' ? 8 : 24; // in hours
  const timeDiff = (now - this.createdAt) / (1000 * 60 * 60);
  return timeDiff > responseTimeLimit && this.status === 'pending';
});

module.exports = mongoose.model('Inquiry', inquirySchema);
