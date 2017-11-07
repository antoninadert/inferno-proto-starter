import ViewModel from 'viewmodel-react';

ViewModel.share({
    popupstate: {
        opened:false
    }
});

ViewModel.mixin({

});

ViewModel.global({
    innerNav: function (event) {
        if (Meteor.isClient) {
            event.preventDefault(); // prevent full page reload
            const History = require('/Hub/client/hubClient').History; // similar to import { History } from '/Hub/client/hubClient';
            History.push(event.currentTarget.getAttribute('href')); // do SPA navigation
        }
    },
    replaceNav: function (event) {
        if (Meteor.isClient) {
            event.preventDefault();
            const History = require('/Hub/client/hubClient').History;
            History.replace(event.currentTarget.getAttribute('href')); // do not add a forward in the browser
        }
    }
})