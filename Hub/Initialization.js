// Point of entry of our app
import { Meteor } from 'meteor/meteor';

if (Meteor.isClient) {
    require('/Hub/client/hubClient.js');
    Meteor.startup(() => {
        
    });
}

if (Meteor.isServer) {
    require('/Hub/server/hubServer.js');
    Meteor.startup(() => {

    });
}
