import { AdsCollection } from '/imports/_Collections/_Collections'
import { Mongo } from 'meteor/mongo';

import '/Hub/Store';

const VMstyles = {
    li: {
        color: 'blue',
        'font-weight': 'bold'
    }
}

Ad({
    id: '',
    ad() {
        if (Meteor.isClient) {
            let mID;
            try { //necessary to handle normal _id (from Meteor) and Mongo.ObjectID (from Mongo Console) simultaneously
                mID = new Mongo.ObjectID(this.id())
            } catch (e) {
                mID = this.id()
            }
            return AdsCollection.findOne(mID) || {};
        }

        return {};
    },
    alone: false,
    title: '',
    description: '',
    styles: VMstyles,
    render() {
        <li b="style: styles.li">
            <a href={this.alone() ? '/' : '/ads/' + this.id()} b="click:innerNav">
                <span b="if:!alone, text: '#'+id + '+'+ title + '+' +description"></span>
                <span b="if:alone, text: '#'+id + '+'+ ad.title + '+' +ad.description"></span></a>
        </li>
    }
});