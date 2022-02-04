import React from "react";
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component{
    constructor(){
        super();

        this.state ={
            hasErrord: false
        };
    }

    static getDerivedStateFromError(){
        return { hasErrord: true }
    }

    componentDidCatch(error, info){
        console.log(error);
    }

    render() {
        if(this.state.hasErrord){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/qIufhof.png"/>
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary