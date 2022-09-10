const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    product: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: false,
      default: 0,
    },
    paymentMethod: {
      type: String,
      required: false,
    },
    totalPrice: {
      type: Number,
      required: false,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      required: false,
      default: false,
    },
    paidAt: {
      type: Date,
      required: false,
    },
    // product: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: false,
    //   ref: 'Product'
    // },
        // customer: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: false,
    //   ref: 'Customer'
    // }, TODO in future
 }
);

module.exports = model('Order', orderSchema);
