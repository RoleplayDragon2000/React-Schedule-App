import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../actions';


import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action"

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
              <div className="library-course__title-check"> 
              <label className="library-course__title">{this.props.title}</label>
                { Icon('fas fa-check', 'library-course__icon')}
             </div>
                <Arrow className="library-course__arrow"/>
                <Action
                     id={this.props.id}
                     onClick={() => this.props.toggleEnrolled(this.props.id)}
                     className={`library-course__action ${this.props.enrolled ? 'action-remove' : ''}`}
                />
            <div className="library-course__description"></div>
            <label>{this.props.description}</label>
            </div>
        )
    }
}

export default connect(null, actions)(LibraryCourse);
