import React, { Component } from 'react';
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
                <Action className="library-course__action"/>
            <div className="library-course__description"></div>
            <label>{this.props.description}</label>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien luctus, pretium magna nec, commodo magna. Nullam rutrum maximus pulvinar. Aliquam eu eleifend tortor. Mauris dapibus, sapien eget posuere fermentum, nisl velit egestas tortor, eget tincidunt velit mauris eu nunc.
                </p>

            </div>
        )
    }
}

export default LibraryCourse;
