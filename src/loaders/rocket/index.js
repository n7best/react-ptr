//Icon Madeby Google CC 3.0
import React from 'react';
import rocketSrc from './rocket.svg';
import animalSrc from './chick.svg';
import './style.less';

export default {
    loaderHeight: 150,
    loaderLoadingHeight: 150,
    loaderDefaultIcon: (progress) => {

        let easeAmt = progress * progress

        let sunStyle = {
            bottom: `${10 +  (easeAmt / 100) }px`
        }

        let animalStyle = {
            bottom: `${10 +  (easeAmt / 150) }px`
        }

        let rocketStyle={
            bottom: `${65 + ( 200 - (easeAmt / 50) )}px`
        }

        let rocketShadowStyle={
            width: `${80 - ( easeAmt / 500 )}px`,
            bottom: `${ (easeAmt / 180) }px`
        }

        let floorStyle = {
            height: `${30 + ( easeAmt / 180 )}px`
        }

        let fenceStyle = {
            bottom: `${progress >= 100 ? 14 : -100}px`
        }

        return (
            <div style={{ flex: 1, margin: 'auto', background: '#eee' }}>
                <div className="react-ptr-loader__rocket" >
                    <div className="react-ptr-loader__rocket-fence" style={ fenceStyle }>
                        <div className="legs"></div>
                        <p>Release to refresh</p>
                    </div>
                    <img className="react-ptr-loader__rocket-rocket" src={ rocketSrc } width="70px" height="70px" style={rocketStyle}/>
                    <img className="react-ptr-loader__rocket-animal" src={ animalSrc } width="35px" height="35px" style={animalStyle}/>
                    <div className="react-ptr-loader__rocket-rocketShadow" style={ rocketShadowStyle } />
                    <div className="react-ptr-loader__rocket-floor" style={ floorStyle } />

                    <div className="react-ptr-loader__rocket-tower" style={{ left: '80px', height: '100px' }} />
                    <div className="react-ptr-loader__rocket-tower" style={{ left: '100px' }} />
                    <div className="react-ptr-loader__rocket-tower" style={{ left: '175px' }} />
                    <div className="react-ptr-loader__rocket-tower" style={{ left: '195px', height: '100px' }} />

                    <div className="react-ptr-loader__rocket-sun" style={ sunStyle } />
                </div>
            </div>
        )
    },
    loaderLoadingIcon: (
        <div style={{ flex: 1 }}>
            <div className="react-ptr-loader__rocket" >

                <img className="react-ptr-loader__rocket-rocket" src={ rocketSrc } width="70px" height="70px" style={{ bottom: '65px' }}/>
                <div className="react-ptr-loader__rocket-fire">
                    <div className="red flame"></div>
                    <div className="orange flame"></div>
                    <div className="yellow flame"></div>
                    <div className="white flame"></div>
                </div>
                <img className="react-ptr-loader__rocket-animal" src={ animalSrc } width="35px" height="35px" style={{ bottom: '75px' }}/>

                <div className="react-ptr-loader__rocket-sun" style={ { bottom: '105px' } } />
                <div className="react-ptr-loader__rocket-clouds">
                    {
                        [...Array(30)].map( (cloud, i) => {
                            const style = {
                                left: ( Math.ceil(Math.random() * (90 + 10)) - 10 ) + '%',
                                top: ( Math.ceil(Math.random() * (200)) - 100 ) + '%',
                                opacity: Math.random(0.5, 1.1),
                                transform: `scale(${Math.random(1, 2)})`
                            }
                            return <div className="cloud" key={i} style={style}/>
                        })
                    }
                </div>
            </div>
        </div>
    ),
}