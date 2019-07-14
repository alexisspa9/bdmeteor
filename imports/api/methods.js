import { Meteor } from 'meteor/meteor';
import { Areas, Categories } from '../../lib/collections';

Meteor.methods({
    'api.getCategories'() {
        return Categories.find({}).fetch();
    },
    'api.getAreas'() {
        return Areas.find({}).fetch();
    },
    
    'api.addCategory'(categories) {

        categories.forEach(function (category) {
            Categories.insert({
                eidos: '0',
                name_el: category.name_el,
                name_en: category.name_en,
                tags_el: category.name_en,
                tags_en: category.name_en,
                createdAt: new Date()
            });
        });
    }
    // myjson =[{
    //     id: 2,
    //     name_el: "Τυπογραφεία & Ψηφιακές Εκτυπώσεις",
    //     name_en: "Printing Press & Digital Printing"
    // },
    // {
    //     id: 3,
    //     name_el: "Ψησταριές, Ψητοπωλεία",
    //     name_en: "Grill Houses"
    // }]

    // Meteor.call('api.addCategory', myjson, (err, result) => {
    //     console.log(err); // in case an exception is thrown, then this will contain information about the error
    //     console.log(result); // this will contain a random number between 25 and 50
    // })

    // Meteor.call('getAreas', (err, result) => {
    //     console.log(err); // in case an exception is thrown, then this will contain information about the error
    //     console.log(result);
    // })
})