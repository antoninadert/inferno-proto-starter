//No Viewmodel Explorer for Inferno 
//No defer attribute with Inferno VM (Bug)
Home({
  render() {
    <div>
      <h1>It Works!</h1>
      <a href="/about" b="click:innerNav">About Us</a>, 
      <a href="/ideas" b="click:innerNav">Ideas</a>, 
      <a href="/ads" b="click:innerNav">Ads</a>, 
      <a href="/" b="click:innerNav">Home</a>
      <Ads />
      <Person />
    </div>
  }
})

//ProTip: Render Prop pattern
// see https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce