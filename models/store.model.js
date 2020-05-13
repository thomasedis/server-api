const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    book: {
        image: { type: String, required: true },
        name: { type: String, required: true },
        auther: { type: String, required: true },
        priceOld: { type: Number, required: true },
        priceNew: { type: Number, required: true },
        percentDiscount: { type: Number, required: true },
        rating: { type: Number, required: true },
        inventory: { type:Number, required: true }
    },
  quantity: { type: Number, required: true },
}, {
  timestamps: true,
});



const Store = mongoose.model('Store', storeSchema);
let temp = [
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51XKJ7YHK3L._AC_SX184_.jpg",
        "name": "Oregano - Fresh",
        "auther": "Lauraine Santon",
        "rating": 1,
        "priceOld": 538100,
        "priceNew": 183746,
        "percentDiscount": 19,
        "inventory": 739
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51HDieTXIlL._AC_SX184_.jpg",
        "name": "Apples - Spartan",
        "auther": "Bunni Tiddy",
        "rating": 2,
        "priceOld": 201478,
        "priceNew": 522748,
        "percentDiscount": 58,
        "inventory": 128
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL._AC_SX184_.jpg",
        "name": "Hinge W Undercut",
        "auther": "De witt Mouser",
        "rating": 4,
        "priceOld": 419139,
        "priceNew": 203237,
        "percentDiscount": 73,
        "inventory": 363
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/41PVCekoo8L._AC_SX184_.jpg",
        "name": "Glaze - Apricot",
        "auther": "Tedi Dowley",
        "rating": 5,
        "priceOld": 768045,
        "priceNew": 141389,
        "percentDiscount": 72,
        "inventory": 972
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51rYBXGMt+L._AC_SX184_.jpg",
        "name": "Muffin Mix - Oatmeal",
        "auther": "Lena Daniells",
        "rating": 5,
        "priceOld": 398585,
        "priceNew": 704967,
        "percentDiscount": 76,
        "inventory": 970
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/61iJsXNFLZL._AC_SX184_.jpg",
        "name": "Beans - Long, Chinese",
        "auther": "Kristen Slayny",
        "rating": 3,
        "priceOld": 309362,
        "priceNew": 781843,
        "percentDiscount": 26,
        "inventory": 806
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/41T6o6yz4uL._AC_SX184_.jpg",
        "name": "Appetiser - Bought",
        "auther": "Con Lynock",
        "rating": 1,
        "priceOld": 737350,
        "priceNew": 970724,
        "percentDiscount": 17,
        "inventory": 177
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51ERWhy2d-L._AC_SX184_.jpg",
        "name": "Pork - Kidney",
        "auther": "Myriam Ondrak",
        "rating": 1,
        "priceOld": 196831,
        "priceNew": 694996,
        "percentDiscount": 62,
        "inventory": 28
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51vW7pqwcEL._AC_SX184_.jpg",
        "name": "Ice Cream - Strawberry",
        "auther": "Carlynn Pullan",
        "rating": 2,
        "priceOld": 630738,
        "priceNew": 580192,
        "percentDiscount": 38,
        "inventory": 609
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51wGNqaSIbL._AC_SX184_.jpg",
        "name": "Veal - Kidney",
        "auther": "Tomas Yurygyn",
        "rating": 3,
        "priceOld": 748665,
        "priceNew": 521950,
        "percentDiscount": 79,
        "inventory": 807
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51qXbKHWJRL._AC_SX184_.jpg",
        "name": "Chocolate - Sugar Free Semi Choc",
        "auther": "Othelia Vonderdell",
        "rating": 5,
        "priceOld": 704145,
        "priceNew": 685626,
        "percentDiscount": 25,
        "inventory": 749
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/41PbOxxUAuL._AC_SX184_.jpg",
        "name": "Oil - Peanut",
        "auther": "Mahalia Hartil",
        "rating": 2,
        "priceOld": 161041,
        "priceNew": 684309,
        "percentDiscount": 65,
        "inventory": 897
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51jGFTPIsVL._AC_SX184_.jpg",
        "name": "Veal - Knuckle",
        "auther": "Leslie Dury",
        "rating": 3,
        "priceOld": 353971,
        "priceNew": 612471,
        "percentDiscount": 50,
        "inventory": 339
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/313uORwmeaL._AC_SX184_.jpg",
        "name": "Crab - Claws, Snow 16 - 24",
        "auther": "Eustace Broader",
        "rating": 3,
        "priceOld": 699691,
        "priceNew": 129607,
        "percentDiscount": 22,
        "inventory": 202
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/51p50V9-EjL._AC_SX184_.jpg",
        "name": "Cakes Assorted",
        "auther": "Thorpe Climar",
        "rating": 3,
        "priceOld": 846956,
        "priceNew": 536839,
        "percentDiscount": 30,
        "inventory": 61
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/519OzBCa3EL._AC_SX184_.jpg",
        "name": "Gooseberry",
        "auther": "Percival Odell",
        "rating": 3,
        "priceOld": 290064,
        "priceNew": 265130,
        "percentDiscount": 76,
        "inventory": 56
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/41QvNXyKVdL._AC_SX184_.jpg",
        "name": "Maintenance Removal Charge",
        "auther": "Ber Gooding",
        "rating": 3,
        "priceOld": 447628,
        "priceNew": 876948,
        "percentDiscount": 46,
        "inventory": 415
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/516uBNfG0NL._AC_SX184_.jpg",
        "name": "Syrup - Monin - Granny Smith",
        "auther": "Zaneta Galego",
        "rating": 4,
        "priceOld": 169580,
        "priceNew": 120932,
        "percentDiscount": 68,
        "inventory": 230
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/41dppk7y0iL._AC_SX184_.jpg",
        "name": "Beer - Creemore",
        "auther": "Slade Laurence",
        "rating": 1,
        "priceOld": 476867,
        "priceNew": 288131,
        "percentDiscount": 52,
        "inventory": 238
      },
      
      "quantity": 1    },
    {
      "book": {
        "image": "https://images-na.ssl-images-amazon.com/images/I/414u+lgzBaL._AC_SX184_.jpg",
        "name": "Stock - Veal, Brown",
        "auther": "Ritchie Oxnam",
        "rating": 3,
        "priceOld": 202421,
        "priceNew": 354298,
        "percentDiscount": 64,
        "inventory": 362
      },
      
      "quantity": 1    }
  ]
// Store.insertMany(temp, (err)=>{
//     if(err) throw err
//     else
//     console.log("done")
// })
// Store.deleteMany({quantity: 1},err =>{
//     if(err) throw err
//     else 
//         console.log('Deleted')
// } )

module.exports = Store;