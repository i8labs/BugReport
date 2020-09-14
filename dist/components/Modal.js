import React from 'react';
import './Modal.css';
import BugIcon from "mdi-react/BugIcon";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Modal = function Modal(props) {
  var ret = null;

  if (props.open) {
    ret = React.createElement("div", {
      className: "react-modal-classname"
    }, React.createElement("div", {
      className: "backdrop",
      onClick: props.onBackDropClicked
    }), React.createElement("div", {
      className: "modal",
      onClick: props.onModalClicked
    }, React.createElement("div", {
      className: "close-icon",
      onClick: props.onCloseClicked
    }, React.createElement("div", null), React.createElement("div", null)), React.createElement("div", {
      className: "d-flex align-items-center justify-content-center"
    }, React.createElement("h4", {
      className: "text-modal mb-0 modal__title"
    }, " ", React.createElement(BugIcon, null), " Report Bug")), props.children));
  }

  return React.createElement(ReactCSSTransitionGroup, {
    transitionName: "modal",
    transitionEnterTimeout: 500,
    transitionLeaveTimeout: 300
  }, ret);
};

export default Modal;