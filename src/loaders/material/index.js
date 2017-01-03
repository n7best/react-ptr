//Icon Madeby Google CC 3.0
import React from 'react';
import refreshSrc from './refresh-button.svg';
import './style.less';

export default {
    mode: 'absolute',
    loaderHeight: 170,
    loaderLoadingHeight: 130,
    loaderDefaultIcon: (progress) => {
        let style = {
            transform: `rotate(${progress * 2.8}deg)`,
            opacity: progress/100
        }

        return (
            <div style={{ flex: 1, padding: '5px', margin: 'auto' }}>
                <div className="react-ptr-loader__material" >
                    <img src={ refreshSrc } width="20px" height="20px" style={style}/>
                </div>
            </div>
        )
    },
    loaderLoadingIcon: (
        <div style={{ flex: 1, padding: '5px' }}>
            <div className="react-ptr-loader__material">
                <svg className="react-ptr-loader__material-loading" width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                   <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        </div>
    ),
}