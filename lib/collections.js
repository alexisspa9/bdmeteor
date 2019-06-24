import { Mongo } from 'meteor/mongo';
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";


export const Categories = new Mongo.Collection('categories');
export const Areas = new Mongo.Collection('areas');


Meteor.methods({
    addCategory: ({name_el, name_en, tags_el, tags_en, eidos, published}) => {
        check(name_el, String);

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Categories.insert({
            name_el: name_el,
            name_en: name_en,
            tags_el: tags_el,
            tags_en: tags_en,
            eidos: eidos,
            published: published,
            createdAt: new Date()
        });
    },

    removeCategory: (category) => {
        Categories.remove(category._id);
    },

    addArea: ({ name_el, name_en, old_id }) => {

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Areas.insert({
            name_el: name_el,
            name_en: name_en,
            old_id: old_id,
            createdAt: new Date()
        });
    },

    removeArea: (area) => {
        Areas.remove(area._id);
    }
});
