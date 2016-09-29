import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import useSheet from 'react-jss';

jss.setup(preset());

const css={
            header:{ 
                minHeight: '70px', 
                height: '70px',
                backgroundColor: '#f6f6f6', 
                borderBottom: '1px solid #bbb'
            },
            headerContent:{
                backgroundColor:'#ececec', 
                width:'100%', 
                height: '100%',
                display: 'flex', 
                flexDirection:'row',
                alignItems:'stretch', 
                justifyContent:'center', 
                position:'relative'
            }
        }

class PaneHeader extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {classes} = this.props.sheet;
        
        var heading = this.props.heading;
        var menu = this.props.menu;
        var content;
        
        if(this.props.children){
            content=this.props.children;
        }else{
            content=<div className={classes.headerContent}>{heading}{menu}</div>;
        }
        
        return(<div className={classes.header}>
                {content}
                </div>);
    }
}

export default useSheet(PaneHeader, css)
