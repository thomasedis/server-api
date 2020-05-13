const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  auther: { type: String, required: true },
  oldPrice: { type: Number, required: true },
  newPrice: { type: Number, required: true },
  discount: { type: Number, required: true },
  rating: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
}, {
  timestamps: true,
});



const Store = mongoose.model('Store', storeSchema);
let temp = [{
   
    "image": "http://demo.posthemes.com/pos_koparion/60-medium_default/rival-field-messenger.jpg",
    "title": "Day the Universe Changed, The",
    "auther": "Nikolaus Summersett",
    "oldPrice": 333,
    "newPrice": 181,
    "discount": 44,
    "rating": 5,
    "category": "Other",
    "quantity": 1
  },
  {
       "image": "http://demo.posthemes.com/pos_koparion/65-medium_default/crown-summit-backpack.jpg",
    "title": "Who Killed Bambi? (Qui a tué Bambi?)",
    "auther": "Oliviero Dunkerly",
    "oldPrice": 163,
    "newPrice": 118,
    "discount": 43,
    "rating": 4,
    "quantity": 1,
    "category": "Magazine"
  },
  {
       "image": "http://demo.posthemes.com/pos_koparion/70-medium_default/field-messenger.jpg",
    "title": "Kabluey",
    "auther": "Mil Ickovici",
    "oldPrice": 347,
    "newPrice": 241,
    "discount": 45,
    "rating": 5,
    "quantity": 1,
    "category": "Sex"
  },
  {
   
    "image": "http://demo.posthemes.com/pos_koparion/75-medium_default/push-it-messenger-bag.jpg",
    "title": "One True Thing",
    "auther": "Libbi Sebborn",
    "oldPrice": 292,
    "newPrice": 233,
    "discount": 31,
    "rating": 4,
    "quantity": 1,
    "category": "Lover"
  },
  {
       "image": "http://demo.posthemes.com/pos_koparion/100-medium_default/wayfarer-messenger-bag.jpg",
    "title": "24 Exposures",
    "auther": "Happy Simonson",
    "oldPrice": 472,
    "newPrice": 92,
    "discount": 47,
    "rating": 5,
    "quantity": 1,
    "category": "Life"
  },
  {
   
    "image": "http://demo.posthemes.com/pos_koparion/101-medium_default/wayfarer-messenger-bag.jpg",
    "title": "Best Exotic Marigold Hotel, The",
    "auther": "Sutherland Maker",
    "oldPrice": 430,
    "newPrice": 136,
    "discount": 40,
    "rating": 3,
    "quantity": 1,
    "category": "Other"
  },
  {
   
    "image": "http://demo.posthemes.com/pos_koparion/102-medium_default/wayfarer-messenger-bag.jpg",
    "title": "Dolemite",
    "auther": "Cyril Pavolillo",
    "oldPrice": 252,
    "newPrice": 257,
    "discount": 42,
    "rating": 5,
    "quantity": 1,
    "category": "Family"
  },
  {
   
    "image": "http://demo.posthemes.com/pos_koparion/103-medium_default/wayfarer-messenger-bag.jpg",
    "title": "It Came from Hollywood",
    "auther": "Laryssa Deverock",
    "oldPrice": 214,
    "newPrice": 168,
    "discount": 45,
    "rating": 4,
    "quantity": 1,
    "category": "Lover"
  },
  {
       "image": "http://demo.posthemes.com/pos_koparion/135-medium_default/voyage-yoga-bag.jpg",
    "title": "Kaboom",
    "auther": "Paddie Vallack",
    "oldPrice": 144,
    "newPrice": 147,
    "discount": 46,
    "rating": 5,
    "quantity": 1,
    "category": "Lover"
  },
  {
       "image": "http://demo.posthemes.com/pos_koparion/137-medium_default/voyage-yoga-bag.jpg",
    "title": "That Night in Varennes (Nuit de Varennes, La)",
    "auther": "Darsie Davidou",
    "oldPrice": 193,
    "newPrice": 136,
    "discount": 37,
    "quantity": 1,
    "rating": 5,
    "category": "Magazine"
  }]
// Store.insertMany(temp, (err)=>{
//     if(err) throw err
//     else
//     console.log("done")
// })


module.exports = Store;