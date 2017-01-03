import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import DefaultLoader from '../loaders/default';

import './ptr.less';
/**
 *  A Pull to refresh container enable user to pull the container and refresh it's content
 *
 */
class PullToRefresh extends Component{

    static propTypes = {
        /**
         * height for the container, use string like '10px', default for '100%'
         *
         */
        height: PropTypes.string,
        /**
         * loader
         *
         */
        loader: PropTypes.shape({
            mode: PropTypes.string,
            loaderHeight: PropTypes.number,
            loaderLoadingHeight: PropTypes.number,
            loaderDefaultIcon: PropTypes.func,
            loaderLoadingIcon: PropTypes.element
        }),
        /**
         * callback when refresh is request, pass resolve function
         *
         */
        onRefresh: PropTypes.func,
    };

    static defaultProps = {
        height: '100%',
        loader: DefaultLoader,
        onRefresh: (resolve, reject) => setTimeout( ()=> resolve(), 2000)
    };

    constructor(props){
        super(props)

        this.state = {
            pullPercent: 0,
            touching: false,
            ogY: 0,
            touchId: undefined,
            animating: false,
            loading: false,
            initScrollTop: 0
        }

        this.handleTouchStart = this.handleTouchStart.bind(this)
        this.handleTouchMove = this.handleTouchMove.bind(this)
        this.handleTouchEnd = this.handleTouchEnd.bind(this)
        this.resolveRefresh = this.resolveRefresh.bind(this)
    }

    resolveRefresh(){
        this.setState({
            loading: false,
            animating: true,
            pullPercent: 0
        },()=>{
            setTimeout(()=>this.setState({ animating: false}), 500)
        })
    }

    handleTouchStart(e){
        if(this.state.touching || this.state.loading) return;

        let $content = ReactDOM.findDOMNode(this.refs.content)

        this.setState({
            touching: true,
            touchId : e.targetTouches[0].identifier,
        	ogY: this.state.pullPercent == 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.pullPercent,
        	animating: false,
        	initScrollTop: $content.scrollTop
        })
    }

    handleTouchMove(e){
        if(!this.state.touching || this.state.loading) return;
        if(e.targetTouches[0].identifier !== this.state.touchId) return;


        const pageY = e.targetTouches[0].pageY;
        let diffY = pageY - this.state.ogY;

        //if it's scroll
        if(diffY < 0) return;

        //if it's not at top
        let $content = ReactDOM.findDOMNode(this.refs.content)
        if($content.scrollTop > 0) return;

        //prevent move background
        e.preventDefault();

        diffY = ( diffY - this.state.initScrollTop ) > 100 ? 100 : ( diffY - this.state.initScrollTop )

        this.setState({
            pullPercent: diffY
        })
    }

    handleTouchEnd(e){
        if(!this.state.touching || this.state.loading) return;

        let pullPercent = this.state.pullPercent
        let loading = false

        if(pullPercent == 100) {
            loading = true
        }else{
            pullPercent = 0
        }

        this.setState({
            touching: false,
            ogY: 0,
            touchId: undefined,
            initScrollTop: 0,
            animating: loading,
            pullPercent,
            loading
        }, ()=>{
            //triger after ui change
            if(loading) this.props.onRefresh(this.resolveRefresh)
        })
    }

    render(){
        const { className, children, height, loader, onRefresh, ...domProps } = this.props
        let cls = classNames('react-ptr', className);

        let { loaderHeight, loaderLoadingHeight, loaderDefaultIcon, loaderLoadingIcon, mode } = Object.assign({}, DefaultLoader, loader)

        if(!loaderLoadingHeight) loaderLoadingHeight = loaderHeight

        let containerStyle = {
            height
        }

        let loaderStyle = {
            //transform: `translate(0, ${this.state.pullPercent / 2}px)`,
            height: this.state.loading ? loaderLoadingHeight : loaderHeight,
            transition: this.state.animating ? 'all .5s' : 'none'
        }

        //default mode

        switch(mode){
            case 'marginTop':
                loaderStyle['marginTop'] = `${ -loaderHeight + (this.state.pullPercent / (100/loaderHeight))}px`
                break;

            case 'absolute':
                loaderStyle['position'] = 'absolute'
                loaderStyle['top'] = `${ -loaderHeight + (this.state.pullPercent / (100/loaderHeight))}px`
                break;
        }

        return (
            <div className={cls} style={ containerStyle } {...domProps}>
                <div
                    className="react-ptr__loader"
                    style={loaderStyle}
                >
                    {
                        this.state.loading ?
                        loaderLoadingIcon :
                        loaderDefaultIcon(this.state.pullPercent)
                    }
                </div>
                <div
                    className="react-ptr__content"
                    ref="content"
                    onTouchStart={this.handleTouchStart}
                    onTouchMove={this.handleTouchMove}
                    onTouchEnd={this.handleTouchEnd}
                >
                    { children }
                </div>
            </div>
        )
    }

}

export default PullToRefresh;