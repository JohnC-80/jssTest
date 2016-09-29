import React from 'react'
import Pane from '../Pane/Pane'
import PaneHeader from '../PaneHeader/PaneHeader'
import PaneMenu from '../PaneMenu/PaneMenu'
import PaneButton from '../PaneButton/PaneButton'
import PaneDropdownButton from '../PaneDropdownButton/PaneDropdownButton'
import PaneDropdownMenu from '../PaneDropdownMenu/PaneDropdownMenu'
import MultiColumnList from '../MultiColumnList/MultiColumnList'
import {Dropdown, Glyphicon} from 'react-bootstrap'

import jss from 'jss'
import preset from 'jss-preset-default'
import useSheet from 'react-jss'

jss.setup(preset());

const css={
    paneHeading:{
        margin:'2px', marginTop:'10px', fontSize:18, fontWeight: 'bold'
    },
    centerText:{
        textAlign: 'center'
    }
};

class ResultsPane extends React.Component{
  constructor(props){
    super(props);
    this.state={
      opendd:false
    };
  }
  
  onToggleDrop(open){
      if(!open){
        //alert("hide called");
      }
      this.setState({
        opendd: !this.state.opendd
      });
    }
    
    onToggleColumn(e){
        var colname = e.currentTarget.value;
        var hidden = this.props.hiddenColumns;
        const index= hidden.indexOf(colname);
        if(index === -1){
             hidden.push(colname);
        }else{
            hidden.splice(index, 1);
        }
        
        this.props.update({
            hiddenColumns:hidden
        });
    }
  
  render(){
    const {classes} = this.props.sheet;
    var hidden = [];
    var columnsDrop = [];
    this.props.columnOrder.map(function(colname,i){
        columnsDrop.push(<li key={i}>
        <input type='checkbox' checked={(this.props.hiddenColumns.indexOf(colname) === -1)} value={colname} id={"ColumnCB"+i} onChange={this.onToggleColumn.bind(this)}/>
        <label htmlFor={"ColumnCB"+i}>{colname}</label></li>)
    }, this);
    
    var paneTitle=<div className={classes.centerText}><div className={classes.paneHeading}>Results for "{this.props.headerText}"</div><div>{this.props.headerSubText}</div></div>;
        
    var resultMenu=<PaneMenu>
                    <PaneButton ref={(ref)=>this.bookmarkButton = ref} title="Set Bookmark">
                    <Glyphicon glyph="bookmark" style={{fontSize:20, color:'#777'}}/>
                    </PaneButton >
                    <Dropdown id="dropdown-custom-menu" pullRight={true} open={this.state.opendd} onToggle={this.onToggleDrop.bind(this)}>
                        <PaneDropdownButton bsRole="toggle" title="Show/Hide Info">
                        <Glyphicon glyph="option-horizontal" style={{fontSize:20, color:'#777'}}/>
                        </PaneDropdownButton>
                        <PaneDropdownMenu bsRole="menu" onToggle={this.onToggleDrop.bind(this)}>{columnsDrop}</PaneDropdownMenu>
                    </Dropdown>
                </PaneMenu>;
        
    var resultsHeader = <PaneHeader heading={paneTitle} menu={resultMenu}></PaneHeader>;
                        
    var resultsContent = this.props.children;
    
    return(<Pane header={resultsHeader} content={resultsContent} slideOpen={this.props.slideOpen} defaultWidth={this.props.defaultWidth}>
                
           </Pane>);
  }
}

export default useSheet(ResultsPane, css)