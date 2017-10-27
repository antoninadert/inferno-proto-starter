//No Viewmodel Explorer for Inferno 
//No defer attribute with Inferno VM (Bug)
import { Popup } from '/imports/Popup/Popup';
Home({
  popupOpened: false,
  autorun() {
    if (Meteor.isClient) {

    }
  },
  render() {
    <div>
      <Popup opened={this.popupOpened()}>
        <h1>It Works!</h1>
        <a href="/about" b="click:innerNav">About Us</a>, 
        <a href="/ideas" b="click:innerNav">Ideas</a>, 
        <a href="/ads" b="click:replaceNav">Ads</a>, 
        <a href="/" b="click:replaceNav">Home</a>, 
        <button b="toggle:popupOpened">Modal</button>
        <Ads />
        <Person />
      </Popup>
    </div>
  }
})

 //innernav for pages and modals
 // replaceNav for self-link and Tabs
 //TODO : state persistence should be kept upon route change, 
 //and in Localstorage so offline state persistence is a thing.


 
//ProTip: Render Prop pattern
// see https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce