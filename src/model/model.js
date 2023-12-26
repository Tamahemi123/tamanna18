const mongoose = require('mongoose');

// Task 1
const BrandModel = mongoose.model('Brand', {
  brandName: String,
  brandImg: String,
});

// Task 2
const CartModel = mongoose.model('Cart', {
  productID: String,
  userID: String,
  color: String,
  price: Number,
  qty: Number,
  size: String,
});

// Task 3
const CategoryModel = mongoose.model('Category', {
  categoryName: String,
  categoryImg: String,
});

// Task 4
const FeaturesModel = mongoose.model('Features', {
  name: String,
  description: String,
  img: String,
});

// Task 5
const InvoiceModel = mongoose.model('Invoice', {
  userID: String,
  payable: Number,
  // Add other fields
});

// Task 6
const InvoiceProductModel = mongoose.model('InvoiceProduct', {
  userID: String,
  productID: String,
  invoiceID: String,
  qty: Number,
  price: Number,
  color: String,
  size: String,
});

// Task 7
const PaymentSettingModel = mongoose.model('PaymentSetting', {
  store_id: String,
  // Add other fields
});

// Task 8
const ProductDetailsModel = mongoose.model('ProductDetails', {
  img1: String,
  // Add other fields
});

// Task 9
const ProductModel = mongoose.model('Product', {
  title: String,
  shortDes: String,
  price: Number,
  discount: Number,
  // Add other fields
});

// Task 10
const ProductSliderModel = mongoose.model('ProductSlider', {
  title: String,
  des: String,
  price: Number,
  img: String,
  productID: String,
});

// Task 11
const ProfileModel = mongoose.model('Profile', {
  userID: String,
  cus_add: String,
  // Add other fields
});

// Task 12
const ReviewModel = mongoose.model('Review', {
  productID: String,
  userID: String,
  des: String,
  rating: Number,
});

// Task 13
const UserModel = mongoose.model('User', {
  email: String,
  otp: String,
});

// Task 14
const WishModel = mongoose.model('Wish', {
  productID: String,
  userID: String,
});

module.exports = {
  BrandModel,
  CartModel,
  CategoryModel,
  FeaturesModel,
  InvoiceModel,
  InvoiceProductModel,
  PaymentSettingModel,
  ProductDetailsModel,
  ProductModel,
  ProductSliderModel,
  ProfileModel,
  ReviewModel,
  UserModel,
  WishModel,
};
