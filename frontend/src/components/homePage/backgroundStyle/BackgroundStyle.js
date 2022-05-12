import React from 'react';
import './BackgroundStyle.css'

export default
class BackgroundStyle extends React.Component {
    render() {
        return (
            <div className="BackgroundStyle">
                {this.props.children}   
            </div>
        );
    }
}


