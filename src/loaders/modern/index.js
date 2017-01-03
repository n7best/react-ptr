import React from 'react';
import './style.less';

export default {
    loaderHeight: 100,
    loaderLoadingHeight: 20,
    loaderDefaultIcon: (progress) => {
        let style = {
            transform: `rotate(${ progress >= 100 ? 180 : 0}deg)`,
            transition: 'transform .5s'
        }

        return (
            <div className="react-ptr-loader__modern" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20px" height="20px" style={style}>
                    <path d="M15 4v20.063l-4.28-4.282-1.44 1.407 6 6 .72.72.72-.72 6-6-1.44-1.406L17 24.063V4h-2z"/>
                </svg>
                <span>
                    { progress >= 100 ? 'release to refresh' : 'pull to refresh'}
                </span>
            </div>
        )
    },
    loaderLoadingIcon: (
        <div style={{ flex: 1, padding: '5px' }}>
            <div className="react-ptr-loader__modern-loader">
              <div className="react-ptr-loader__modern-loader-inner">
                <label/><label/><label/><label/><label/><label/>
              </div>
            </div>
        </div>
    ),
}