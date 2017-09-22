import ViewModel from 'viewmodel-react';

ViewModel.global({
    innerNav: function (event) {
        if (Meteor.isClient) {
            event.preventDefault(); // prevent full page reload
            const module = require('/Hub/client/hubClient'); //conditional import is not allowed :(
            const History = module.History // equivalent to import { History } from '/Hub/client/hubClient'; 
            History.push(event.currentTarget.getAttribute('href')); // do SPA navigation
        }
    }
})

ViewModel.mixin({

});