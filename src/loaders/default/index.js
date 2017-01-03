import React from 'react';
import arrowSrc from './arrow.svg';
import checkedSrc from './checked.svg';
import loadingSrc from './loading.svg';

export default {
    mode: 'marginTop',
    loaderHeight: 100,
    loaderLoadingHeight: 100,
    loaderDefaultIcon: (progress) => {
        let style = {
            transform: `rotate(-${progress !== 100 ? progress * 1.8 : 0}deg)`,
            color: progress !== 100 ? '#5f5f5f' : '#1AAD19'
        }
        return (
            <div style={{ flex: 1, padding: '5px' }}>
                <img src={ progress !== 100 ? arrowSrc : checkedSrc } style={style} width="30px" height="30px"/>
            </div>
        )
    },
    loaderLoadingIcon: (
        <div style={{ flex: 1, padding: '5px' }}>
            <img src={ loadingSrc } />
        </div>
    ),
}