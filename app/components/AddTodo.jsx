var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todo = this.refs.todoText.value;

    if (todo && todo.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todo));
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What?"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
