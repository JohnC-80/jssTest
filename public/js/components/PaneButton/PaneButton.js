import React from 'react';
import jss from 'jss'
import preset from 'jss-preset-default';
import useSheet from 'react-jss';

jss.setup(preset());

const css={
    iconButton:{
        padding: '4px',
        border: '0',
        backgroundColor: 'transparent',
        borderRadius:'6px',
        marginRight:'4px',
        minWidth: '34px',
        minHeight: '34px', 
        appearance: 'none',
        lineHeight: 'initial',
        transition: 'all .2s ease',
        '&:hover':{
            backgroundColor: '#fff'
        },
        '&:focus':{
            backgroundColor: '#fefefe'
        }
    }
};



class PaneButton extends React.Component{
    constructor(props){
        super(props)
    }
    
    handleClick(e){
        e.preventDefault();
        this.props.onClick(e);
    }   
    
    render(){
        const {classes} = this.props.sheet;
        return(<button className={classes.iconButton} onClick={this.handleClick.bind(this)} title={this.props.title} >{this.props.children}</button>);
    }
}

export default useSheet(PaneButton, css)

