import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { Categories, Areas, SubAreas, Companies, CompanyTypes, MainCategories } from '../lib/collections';

import './main.html';
//CategoryTemplates
import './templates/categories/categoriesIndex.html';
import './templates/categories/category.html';
import './templates/categories/addCategory.html';
//MainCategoryTemplates
import './templates/maincategories/mainCategoriesIndex.html';
import './templates/maincategories/mainCategory.html';
import './templates/maincategories/addMainCategory.html';
//SubAreaTemplates
import './templates/subareas/subAreasIndex.html';
import './templates/subareas/subArea.html';
import './templates/subareas/addSubArea.html';
//AreaTemplates
import './templates/areas/areasIndex.html';
import './templates/areas/area.html';
import './templates/areas/addArea.html';
//CompanyTemplates
import './templates/companies/companiesIndex.html';
import './templates/companies/company.html';
import './templates/companies/addCompany.html';
//CompanyTypeTemplates
import './templates/companytypes/companyTypesIndex.html';
import './templates/companytypes/addCompanyType.html';
import './templates/companytypes/companyType.html';


//Routes ================================================
FlowRouter.route('/categories', {
  name: 'Categories.index',
  action() {
    BlazeLayout.render('App_body', { main: 'categoriesIndex' });
  }
});

FlowRouter.route('/main-categories', {
  name: 'MainCategories.index',
  action() {
    BlazeLayout.render('App_body', { main: 'mainCategoriesIndex' });
  }
});


FlowRouter.route('/areas', {
  name: 'Areas.index',
  action() {
    BlazeLayout.render('App_body', { main: 'areasIndex' });
  }
});

FlowRouter.route('/subareas', {
  name: 'SubAreas.index',
  action() {
    BlazeLayout.render('App_body', { main: 'subAreasIndex' });
  }
});

FlowRouter.route('/companytypes', {
  name: 'CompanyTypes.index',
  action() {
    BlazeLayout.render('App_body', { main: 'companyTypesIndex' });
  }
});

FlowRouter.route('/companies', {
  name: 'Companies.index',
  action() {
    BlazeLayout.render('App_body', { main: 'companiesIndex' });
  }
});

//Accounts ================================================
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});



//IndexHelpers ================================================
Template.categoriesIndex.helpers({
  categories(){
    return Categories.find({}).fetch();
  }
});

Template.mainCategoriesIndex.helpers({
  mainCategories() {
    return MainCategories.find({}).fetch();
  }
});

Template.areasIndex.helpers({
  areas() {
    return Areas.find({}).fetch();
  }
});
Template.subAreasIndex.helpers({
  subareas() {
    return SubAreas.find({}).fetch();
  }
});
Template.companyTypesIndex.helpers({
  companytypes() {
    return CompanyTypes.find({}).fetch();
  }
});

Template.companiesIndex.helpers({
  companies() {
    return Companies.find({}).fetch();
  }
});


//ModalHelpers ================================================
Template.addCategory.events({
  'click .destroy-it': (event) => {
    for (let i = 0; i < 5000; i++) {
      Meteor.call('api.addCategory', `name${i}`);
    }
  },
  'submit .add-category': (event) => {
    event.preventDefault();
    const target = event.target;
    const name_en = target.name_en.value;
    const name_el = target.name_el.value;
    const tags_en = target.tags_en.value;
    const tags_el = target.tags_el.value;
    const eidos = target.eidos.value;
    const published = target.published.value;

    Meteor.call('addCategory', { name_en, name_el, tags_en, tags_el, eidos, published});
    target.name_en.value = '';
    target.name_el.value = '';
    target.tags_en.value = '';
    target.tags_el.value = '';
    $('#addCategory').modal('hide');
    return false;
  }
});

Template.addMainCategory.events({
  'submit .add-maincategory': (event) => {
    event.preventDefault();
    const target = event.target;
    const name_en = target.name_en.value;
    const name_el = target.name_el.value;
    const published = target.published.value;

    Meteor.call('addMainCategory', { name_en, name_el, published });
    target.name_en.value = '';
    target.name_el.value = '';
    $('#addMainCategory').modal('hide');
    return false;
  }
});


Template.addCompany.events({
  'submit .add-company': (event) => {
    event.preventDefault();
    const target = event.target;
    const name_en = target.name_en.value;
    const name_el = target.name_el.value;
    const old_id = target.old_id.value;
    const url = target.url.value;
    const email = target.email.value;
    const titlos_el = target.titlos_el.value;
    const titlos_en = target.titlos_en.value;
    const facebook = target.facebook.value;
    const linkedin = target.linkedin.value;
    const twitter = target.twitter.value;
    const text_el = target.text_el.value;
    const text_en = target.text_en.value;
    const notes = target.notes.value;
    const skype = target.skype.value;
    const published = target.published.value;
    const tripadvisor = target.tripadvisor.value;

    Meteor.call('addCompany', { notes, skype, published, tripadvisor, name_en, name_el, old_id, url, email, titlos_el, titlos_en, facebook, linkedin, twitter, text_el, text_en });
    target.name_en.value = '';
    target.name_el.value = '';
    target.old_id.value = '';
    target.url.value = '';
    target.email.value = '';
    target.titlos_el.value = '';
    target.titlos_en.value = '';
    target.facebook.value = '';
    target.linkedin.value = '';
    target.twitter.value = '';
    target.text_el.value = '';
    target.text_en.value = '';
    target.notes.value = '';
    target.skype.value = '';
    target.tripadvisor.value = '';
    $('#addCompany').modal('hide');
    return false;
  }
});

Template.addArea.events({
  'submit .add-area': (event) => {
    event.preventDefault();
    const target = event.target;
    const name_en = target.name_en.value;
    const name_el = target.name_el.value;
    const old_id = target.old_id.value;

    Meteor.call('addArea', { name_en, name_el, old_id });
    target.name_en.value = '';
    target.name_el.value = '';
    target.old_id.value = '';
    $('#addArea').modal('hide');
    return false;
  }
});


Template.addSubArea.events({
  'submit .add-subarea': (event) => {
    event.preventDefault();
    const target = event.target;
    const name_en = target.name_en.value;
    const name_el = target.name_el.value;
    const old_id = target.old_id.value;

    Meteor.call('addSubArea', { name_en, name_el, old_id });
    target.name_en.value = '';
    target.name_el.value = '';
    target.old_id.value = '';
    $('#addSubArea').modal('hide');
    return false;
  }
});


Template.addCompanyType.events({
  'submit .add-companytype': (event) => {
    event.preventDefault();
    const target = event.target;
    const title = target.title.value;
    const old_id = target.old_id.value;

    Meteor.call('addCompanyType', {title, old_id });
    target.title.value = '';
    target.old_id.value = '';
    $('#addCompanyType').modal('hide');
    return false;
  }
});



//DeleteHelpers ================================================
Template.category.events({
  'click .delete-category': function(){
    if(confirm('are you sure?')) {
      Meteor.call('removeCategory', this);
    }
  }
});

Template.mainCategory.events({
  'click .delete-maincategory': function () {
    if (confirm('are you sure?')) {
      Meteor.call('removeMainCategory', this);
    }
  }
});

Template.area.events({
  'click .delete-area': function () {
    if (confirm('are you sure?')) {
      Meteor.call('removeArea', this);
    }
  }
});

Template.subarea.events({
  'click .delete-subarea': function () {
    if (confirm('are you sure?')) {
      Meteor.call('removeSubArea', this);
    }
  }
});


Template.companytype.events({
  'click .delete-companytype': function () {
    if (confirm('are you sure?')) {
      Meteor.call('removeCompanyType', this);
    }
  }
});

Template.company.events({
  'click .delete-company': function () {
    if (confirm('are you sure?')) {
      Meteor.call('removeCompany', this);
    }
  }
});

