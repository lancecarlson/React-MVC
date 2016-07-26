import React, { Component, PropTypes } from 'react';

export class Layout extends React.Component {
  render() {
    return (
      <div>
	<a href="/">Welcome</a>
	<a href="/todo_lists">Todo Lists</a>
  
	<div>{this.props.children}</div>
      </div>
    );
  }
}
