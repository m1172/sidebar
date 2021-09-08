import React, { Component } from 'react';
import { Container, Sidebar, Body, Menu } from './style';

export default class sidebar extends Component {
  render() {
    return (
      <Container>
        <Sidebar>
          <Menu>
            <h3>SaaS Kit</h3>
          </Menu>
        </Sidebar>
        <Body>b</Body>
      </Container>
    );
  }
}
