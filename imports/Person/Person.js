Person({
  name: 'Bobby',
  render(){
    <div>
      Name: <input id='myName' b="value: name" /><br />
      <span b="text: 'Hello ' + name"/>
      <a href="/about" b="click:innerNav">About Us</a>
    </div>
  }
});