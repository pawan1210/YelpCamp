var mongoose = require('mongoose');
var Campground = require('./models/campground');
var comment = require('./models/comment');

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "The Grand Canyon is a river valley in the Colorado Plateau that exposes uplifted Proterozoic and Paleozoic strata, and is also one of the six distinct physiographic sections of the Colorado Plateau province. It is not the deepest canyon in the world (Kali Gandaki Gorge in Nepal is much deeper). However, the Grand Canyon is known for its visually overwhelming size and its intricate and colorful landscape. Geologically, it is significant because of the thick sequence of ancient rocks that are well preserved and exposed in the walls of the canyon. These rock layers record much of the early geologic history of the North American continent."
    },
    {
        name: "Desert Mesa",
        image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "The Grand Canyon is a river valley in the Colorado Plateau that exposes uplifted Proterozoic and Paleozoic strata, and is also one of the six distinct physiographic sections of the Colorado Plateau province. It is not the deepest canyon in the world (Kali Gandaki Gorge in Nepal is much deeper). However, the Grand Canyon is known for its visually overwhelming size and its intricate and colorful landscape. Geologically, it is significant because of the thick sequence of ancient rocks that are well preserved and exposed in the walls of the canyon. These rock layers record much of the early geologic history of the North American continent."
    },
    {
        name: "Canyon Floor",
        image: "https://images.pexels.com/photos/1840421/pexels-photo-1840421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "The Grand Canyon is a river valley in the Colorado Plateau that exposes uplifted Proterozoic and Paleozoic strata, and is also one of the six distinct physiographic sections of the Colorado Plateau province. It is not the deepest canyon in the world (Kali Gandaki Gorge in Nepal is much deeper). However, the Grand Canyon is known for its visually overwhelming size and its intricate and colorful landscape. Geologically, it is significant because of the thick sequence of ancient rocks that are well preserved and exposed in the walls of the canyon. These rock layers record much of the early geologic history of the North American continent."
    }

]
function seedDB() {
    Campground.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("removed campgrouds");
        }
        // data.forEach(function (seed) {
        //     Campground.create(seed, function (err, campground) {
        //         if (err) {
        //             conssole.log(err);
        //         } else {
        //             console.log("added a campground");
        //             comment.create(
        //                 {
        //                     text: "This place is great, but i wish there was internet",
        //                     author: "Homer"
        //                 }, function (err, comment) {
        //                     if (err) {
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 }
        //             )
        //         }
        //     });
        // });
    });


};
module.exports = seedDB;