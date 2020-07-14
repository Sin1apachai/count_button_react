import React, { Component } from 'react'

class Header extends Component {

    state = { like: 0, dislike: 0 }

    componentWillMount() {
        console.log('Header: willMount')
    }

    componentDidMount() {
        console.log('Header: didMount')
    }

    render() {
        return (
            <div>                <h1>{this.props.children}</h1>            </div>
        )
    }
}

export default Header