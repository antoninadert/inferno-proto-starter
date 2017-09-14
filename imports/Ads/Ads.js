import { AdsCollection } from '/imports/_Collections/_Collections'

//Comment next line to stop adding a new Ad at every page refresh.
AdsCollection.insert({ title: "my Title world!", description:'my description'});
//AdsCollection.remove( { } )

Ads({
  ads: function () {
    if (Meteor.isClient) {
      //We can load the collection from MongoDB in the client-side
      const result = AdsCollection.find({}).fetch()
      //Wait for result to contain something, otherwise display loadingAds
      return result.length ? result : this.loadingAds();
    }
      //I cannot find a way to render from mongoDB server-side, so I use fake data instead
      return this.loadingAds();
  },
  loadingAds: [
    { _id: 1, title: 'Loading', description: 'please wait' },
    { _id: 2, title: 'Loading', description: 'please wait' },
    { _id: 3, title: 'Loading', description: 'please wait' },
    { _id: 4, title: 'Loading', description: 'please wait' },
    { _id: 5, title: 'Loading', description: 'please wait' },
    { _id: 6, title: 'Loading', description: 'please wait' },
    { _id: 7, title: 'Loading', description: 'please wait' },
    { _id: 8, title: 'Loading', description: 'please wait' },
    { _id: 9, title: 'Loading', description: 'please wait' }
  ],
  render() {
    <div>
      Below you can find the ads
      <ul>
        <Ad b="repeat: ads, key:_id" id={repeatObject._id}/>
      </ul>
    </div>
  }
});
