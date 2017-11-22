import { Mongo } from 'meteor/mongo';

const AdsCollection = new Mongo.Collection('Ads');
const OtherCollection = new Mongo.Collection('Other');
export {AdsCollection, OtherCollection};