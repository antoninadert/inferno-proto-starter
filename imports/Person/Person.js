Person({
  mixin: 'innerLink',
  name: 'Bobby',
  render(){
    <div>
      Name: <input b="value: name" /><br />
      <label b="text: 'Hello ' + name"/>
      <a href="/about" b="click:innerNav">About Us</a>
    </div>
  }
});