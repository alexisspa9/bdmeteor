import { Mongo } from 'meteor/mongo';
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";


export const Categories = new Mongo.Collection('categories');
export const MainCategories = new Mongo.Collection('maincategories');
export const Areas = new Mongo.Collection('areas');
export const SubAreas = new Mongo.Collection('subareas');
export const Companies = new Mongo.Collection('companies');
export const CompanyTypes = new Mongo.Collection('companytypes');


Meteor.methods({

    //MainCategories
    addMainCategory: ({ name_el, name_en, published }) => {
        check(name_el, String);

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        MainCategories.insert({
            name_el: name_el,
            name_en: name_en,
            published: published,
            createdAt: new Date()
        });
    },

    removeMainCategory: (maincategory) => {
        MainCategories.remove(maincategory._id);
    },

    //Categories
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
    
    //Areas
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
    },

    //SubAreas
    addSubArea: ({ name_el, name_en, old_id }) => {

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        SubAreas.insert({
            name_el: name_el,
            name_en: name_en,
            old_id: old_id,
            createdAt: new Date()
        });
    },

    removeSubArea: (subarea) => {
        SubAreas.remove(subarea._id);
    },

    //CompanyTypes
    addCompanyType: ({ title, old_id }) => {

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        CompanyTypes.insert({
            title: title,
            old_id: old_id,
            createdAt: new Date()
        });
    },

    removeCompanyType: (companytype) => {
        CompanyTypes.remove(companytype._id);
    },

    //companies
    addCompany: ({ company_type_id, name_el, name_en, url, old_id, email, titlos_el, titlos_en, facebook, linkedin, twitter, text_el, text_en, notes, skype, published, tripadvisor }) => {

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Companies.insert({
            name_el: name_el,
            name_en: name_en,
            old_id: old_id,
            company_type_id: company_type_id,
            url: url,
            email: email,
            titlos_el: titlos_el,
            titlos_en: titlos_en,
            facebook: facebook,
            linkedin: linkedin,
            twitter: twitter,
            text_el: text_el,
            text_en: text_en,
            notes: notes,
            skype: skype,
            published: published,
            tripadvisor: tripadvisor,
            createdAt: new Date()
        });
    },

    removeCompany: (company) => {
        Companies.remove(company._id);
    }
});
