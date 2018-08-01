import React, { Component } from 'react';
import Icon from "./icon";

class Arrow extends Component {
    render() {
        return(
            <div className={`${this.props.className} arrow`}>
            {Icon("fas fa-plus-circle")}
            {/* fas fa-times-circle */}
            </div>
        )
    }
}

export default Arrow