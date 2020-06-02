const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
        image: { type: String, required: true },
        title: { type: String, required: true },
        auther: { type: String, required: true },
        content: { type: String, required: true },
});
var temp = [{
  "title": "in quam fringilla rhoncus mauris",
  "content": "at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
  "auther": "Darline Carling",
  "image": "zzzz"
}, {
  "title": "elementum in hac habitasse platea dictumst morbi vestibulum velit id",
  "content": "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a",
  "auther": "Fonsie Sandeman",
  "image": "zzzz"
}, {
  "title": "massa id nisl venenatis lacinia aenean sit amet justo morbi",
  "content": "elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat",
  "auther": "John Folli",
  "image": "zzzz"
}, {
  "title": "enim sit amet nunc viverra",
  "content": "enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst",
  "auther": "Dewain Muff",
  "image": "zzzz"
}, {
  "title": "sem sed sagittis nam congue risus semper porta volutpat quam",
  "content": "libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id",
  "auther": "Olvan Gwinnett",
  "image": "zzzz"
}, {
  "title": "sed ante vivamus tortor duis mattis egestas metus",
  "content": "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam",
  "auther": "Ernst Baradel",
  "image": "zzzz"
}, {
  "title": "natoque penatibus et magnis dis parturient",
  "content": "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue",
  "auther": "Georgiana Tommaseo",
  "image": "zzzz"
}]


const Blogs = mongoose.model('Blogs', blogSchema);

// Blogs.insertMany(temp, (err)=>{
//     if(err) throw err
//     else
//     console.log("done")
// })
// Blogs.deleteMany({quantity: 1},err =>{
//     if(err) throw err
//     else 
//         console.log('Deleted')
// } )

module.exports = Blogs;