import React, { Component } from 'react';
import Icon from "../icon";

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Dragons Through the Ages</label>
                { Icon('fas fa-check', 'library-course__icon')}
                {/* arrow */}
                {/* button */}
            <div className="library-course__description"></div>
                <label>Course Description</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien luctus, pretium magna nec, commodo magna. Nullam rutrum maximus pulvinar. Aliquam eu eleifend tortor. Mauris dapibus, sapien eget posuere fermentum, nisl velit egestas tortor, eget tincidunt velit mauris eu nunc. </p>

            </div>
        )
    }
}

export default LibraryCourse;
