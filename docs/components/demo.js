import React from 'react';
import { PullToRefresh } from '../../src/index';

class Demo extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            items: []
        }
    }

    render(){

        const { height, width, loader } = this.props
        const containerStyle = {
            height: `${height}px`,
            width: `${width}px`
        }

        return (
            <div style={containerStyle}>
            </div>
        )
    }
}

export default Demo;