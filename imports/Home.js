//No Viewmodel Explorer for Inferno 
//No defer attribute with Inferno VM (Bug)
Home({
  render() {
    <div>
      <h1>It Works!</h1>
      <a href="/about" b="click:innerNav">About Us</a>, 
      <a href="/ideas" b="click:innerNav">Ideas</a>
      <Ads />
      <Person />
    </div>
  }
})