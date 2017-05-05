var Greeter = React.createClass({
  getDefaultProps: function(){
      return {
        name: 'React',
        message: 'This is from a component.'
      };
  },
  render: function (name){
    var name = this.props.name
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}!!!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var firstName = 'Inventive'
var welcomeMessage = 'This is a paragraph inside a React component.'

ReactDOM.render(
  <Greeter name={firstName} message={welcomeMessage}/>,
  document.getElementById('app')
);
