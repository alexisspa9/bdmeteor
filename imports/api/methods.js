import { Meteor } from 'meteor/meteor';
import { Areas, Categories } from '../../lib/collections';

Meteor.methods({
    'api.getCategories'() {
        return Categories.find({}).fetch();
    },
    'api.getAreas'() {
        return Areas.find({}).fetch();
    },
    'api.addArea'(name_en, name_el, old_id, secret) {
        if(secret === '1234') {
            Areas.insert({
                name_el: name_el,
                name_en: name_en,
                old_id: old_id,
                createdAt: new Date()
            });
            return true;
        } else {
            return false;
        }
    }

    // Meteor.call('getAreas', (err, result) => {
    //     console.log(err); // in case an exception is thrown, then this will contain information about the error
    //     console.log(result);
    // })
})