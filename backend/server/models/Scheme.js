const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Scheme name is required'],
      trim: true,
      maxlength: [200, 'Name cannot exceed 200 characters']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Agriculture',
        'Healthcare',
        'Education',
        'Housing',
        'Entrepreneurship',
        'Social Security',
      ],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: [1000, 'Description cannot exceed 1000 characters']
    },
    deadline: {
      type: Date,
      required: [true, 'Deadline is required'],
    },
    eligibility: [
      {
        type: String,
        required: true,
      },
    ],
    documents: [
      {
        type: String,
        required: true,
      },
    ],
    steps: [
      {
        type: String,
        required: true,
      },
    ],
    videoUrl: {
      type: String,
    },
    languages: [
      {
        type: String,
        default: ['English', 'Hindi'],
      },
    ],
    benefitAmount: {
      type: String,
    },
    officialWebsite: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

schemeSchema.index({ category: 1, deadline: 1 });
schemeSchema.index({ name: 'text', description: 'text' });
schemeSchema.index({ isActive: 1, deadline: 1 });

schemeSchema.virtual('isExpired').get(function () {
  return new Date() > this.deadline;
});

schemeSchema.methods.getDaysUntilDeadline = function () {
  const today = new Date();
  const diffTime = this.deadline - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

schemeSchema.statics.getActiveSchemes = function () {
  return this.find({
    deadline: { $gte: new Date() },
    isActive: true,
  }).sort({ deadline: 1 });
};

module.exports = mongoose.model('Scheme', schemeSchema);