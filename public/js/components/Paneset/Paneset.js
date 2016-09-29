import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import useSheet from 'react-jss';

jss.setup(preset());

const css={
            paneset:{display: 'flex', 
                alignItems:'stretch',
                backgroundColor: '#ccc',
                flexGrow:1,
                flexDirection: 'row',
                height: '100%'
            }
        }

class Paneset extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {classes} = this.props.sheet
        
        return(
                <div className={classes.paneset}>{this.props.children}</div>
                );
    }
}

export default useSheet(Paneset, css);