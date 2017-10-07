import ViewModel from 'viewmodel-react';

ViewModel.global({
    innerNav: function (event) {
        if (Meteor.isClient) {
            event.preventDefault(); // prevent full page reload
            const History = require('/Hub/client/hubClient').History; // equivalent to import { History } from '/Hub/client/hubClient'; require() is used in if conditions
            History.push(event.currentTarget.getAttribute('href')); // do SPA navigation
        }
    }
})

ViewModel.share({

});

ViewModel.mixin({

});