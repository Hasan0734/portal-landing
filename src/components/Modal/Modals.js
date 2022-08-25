import React, { Component } from "react";
import { Modal } from "reactstrap";
export default class Modals extends Component {
  render() {
    return (
      <>
        <Modal
          isOpen={this.props.trigger}
          toggle={this.props.trigger}
          centered
          size={this.props.size}
        >
          {this.props.children}
        </Modal>
      </>
    );
  }
}
