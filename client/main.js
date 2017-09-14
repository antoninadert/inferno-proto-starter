//async function loadLib() { const React = await import('react') } instead of import React from 'react' for lazy loading
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import ViewModel from 'viewmodel-react';
ViewModel.Tracker = Tracker;
import './hub'

// Use Meteor's dependency management


Meteor.startup(() => {

});