import React from 'react'
import Transition from '../../util/transition'
import jss from 'jss'
import PaneHeader from '../PaneHeader/PaneHeader'
import preset from 'jss-preset-default'
import useSheet from 'react-jss'

jss.setup(preset());

const css={
            pane:{
                //width: '30%', 
                position:'relative',
                backgroundColor: "#f6f6f6", 
                borderRight: '1px solid #bbb',
                transition: 'all .1s ease',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignContent:'flex-start'
                
            },
            paneContent:{
              padding: '10px',
              overflow: 'auto',
              flexGrow: 1
            },
            paneResizer:{
                position:'absolute',
                height: '100%',
                width:'4px',
                right:'0',
                cursor:'e-resize',
                zIndex:'10'
                
            }
        };

class Pane extends React.Component{
    constructor(props){
        super(props);
        
           
        this.state={
            width: this.props.slideOpen? "0%" : this.props.defaultWidth
        };
    }
   
    componentDidMount(){
      if(this.props.slideOpen){ 
        new Transition(this, "width", this.props.defaultWidth, true);
      }
         
    }
    
    render(){
        const {classes} = this.props.sheet;
        var {children, ...headerProps} = this.props;
        
        var header = this.props.header || <PaneHeader {...headerProps}></PaneHeader>;
        var content = this.props.content || [];
//        React.Children.forEach(this.props.children, function(child){
//            if(child.type.displayName === 'JSS(PaneHeader)'){
//                header = child;
//            }else{
//              content.push(child);
//            }
//            
//        });
            
        return(
                <div className={classes.pane} style={{width: this.state.width}}>
                    {header}
                    <div className={classes.paneContent}>
                      {content}
                    </div>
                    <div className={classes.paneResizer}></div>
                </div>
              );
    }
}

Pane.propTypes = {
    defaultWidth: React.PropTypes.string,
    slideOpen: React.PropTypes.bool,
    header: React.PropTypes.node,
    content: React.PropTypes.node,
    menu: React.PropTypes.node
};

export default useSheet(Pane, css)
