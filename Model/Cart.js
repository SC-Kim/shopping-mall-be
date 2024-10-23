const mongoose = require('mongoose')
const User = require("./User")
const Schema = mongoose.Schema;

const cartSchema = Schema({
   userID:{type: mongoose.ObjectId, ref:User},
   items: [{
    productId: {type:mongoose.ObjectId, ref:Product},
    size:{type:String, required:true},
    qty: {type:Number, default:1, required:true}
   }]
}, {timestamps:true})

cartSchema.methods.toJSON = function () {
    const obj = this._doc
    delete obj.__v
    delete obj.updateAT
    delete obj.createAt
    return obj
}

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart;