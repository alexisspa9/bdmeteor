import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import './main.html';
import { Categories, Areas } from '../lib/collections';
import { Meteor } from 'meteor/meteor';



Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.body.helpers({
  categories(){
    return Categories.find({}).fetch();
  },
  areas(){
    return Areas.find({}).fetch();
  }
});

Template.addCategory.events({
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

Template.category.events({
  'click .delete-category': function(){
    if(confirm('are you sure?')) {
      Meteor.call('removeCategory', this);
    }
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

Template.area.events({
  'click .delete-area': function () {
    if (confirm('are you sure?')) {
      Meteor.call('removeArea', this);
    }
  }
});

