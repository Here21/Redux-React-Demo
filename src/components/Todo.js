import React from 'react';

const Todo = React.createClass({
  propTypes:{
    completed: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired
  },
  render(){
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}
      >
        {this.props.text}
      </li>
    )
  }
});

export default Todo;
