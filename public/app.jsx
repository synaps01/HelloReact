var GreeterMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Some {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    if (name.length > 0){
      nameRef.value = '';
      this.props.onNewName(name);
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function(){
      return {
        name: 'React',
        message: 'This is from a component.'
      };
  },
  getInitialState: function(){
    return {
      name: this.props.name
    };
  },
  handleNewName: function(name){
    this.setState({
      name: name
    });
  },
  render: function (name){
    var name = this.state.name
    var message = this.props.message
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
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
