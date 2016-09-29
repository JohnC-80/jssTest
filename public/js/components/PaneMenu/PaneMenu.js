import React from 'react'

import jss from 'jss'
import preset from 'jss-preset-default'
import useSheet from 'react-jss'

jss.setup(preset());

const css={
    paneMenu:{
        position:'absolute',
        height: '100%',
        display:'flex',
        alignItems:'center',
        alignContent:'center'
    }
};

function PaneMenu(props){
    var style={};
    const {classes} = props.sheet;
    switch(props.align){
        case 'right':
            style.right = '4px';
            break;
        case 'left':
            style.left = '4px';
            break;
    }
    return(
            <div className={classes.paneMenu} style={style}>
                {props.children}
            </div>
            );
}

PaneMenu.defaultProps = {
    align: 'right'
};

export default useSheet(PaneMenu, css)


