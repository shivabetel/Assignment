import React from 'react';

const ComponentStateHandler = (props) => {

    const { isLoading = false , preloader, children} = props;
    const preloaderComp = () => {
        if(preloader){
            return preloader
        }
        else{
            return (<div>{'...loading'}</div>)
        }
    }

    if(isLoading){
        return preloaderComp()
    }else{
        return children
    }


}

export default ComponentStateHandler