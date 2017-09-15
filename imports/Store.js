import ViewModel from 'viewmodel-react';

ViewModel.global({
        innerNav: function (clickEvent) {
            if (Meteor.isClient) {
                event.preventDefault(); // prevent full page reload
                import { history } from '/client/hub'
                history.push(event.currentTarget.getAttribute('href')); // do SPA navigation
            }
        }
})

ViewModel.mixin({

});