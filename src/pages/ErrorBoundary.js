import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <div>Oops! Something went wrong.</div>; // 에러 메시지를 보여줄 컨텐츠
        }
        return this.props.children;
    }
}

export default ErrorBoundary;