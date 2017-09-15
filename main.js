// Point of entry of our app
import { Meteor } from 'meteor/meteor';


if (Meteor.isClient) {
    import '/client/hub'
    Meteor.startup(() => {
    });
}

if (Meteor.isServer) {
    import '/server/hub'
    Meteor.startup(() => {
    });

}
