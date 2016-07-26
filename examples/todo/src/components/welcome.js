import React, { Component, PropTypes } from 'react';
import { Layout } from './layout';

export class Welcome extends React.Component {
  render() {
    return (
      <Layout>
	<p>Welcome {this.props.name}</p>
      </Layout>
    );
  }
}
