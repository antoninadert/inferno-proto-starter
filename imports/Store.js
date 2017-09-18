import ViewModel from 'viewmodel-react';

ViewModel.global({
        innerNav: function (event) {
            if (Meteor.isClient) {
                event.preventDefault(); // prevent full page reload
                import { History } from '/imports/__Startup/client/hub'
                History.push(event.currentTarget.getAttribute('href')); // do SPA navigation
            }
        }
})

ViewModel.mixin({

});