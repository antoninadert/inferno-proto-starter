// Point of entry of our app
import { Meteor } from 'meteor/meteor';


if (Meteor.isClient) {
    import '/imports/__Startup/client/hub'

    Meteor.startup(() => {
        
    });
}

if (Meteor.isServer) {
    import '/imports/__Startup/server/hub'

    Meteor.startup(() => {

    });
}
