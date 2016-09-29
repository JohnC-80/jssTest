import React from 'react'
import jss from 'jss'
import PaneHeader from '../PaneHeader/PaneHeader'
import Theme from '../../theme'
import preset from 'jss-preset-default'
import useSheet from 'react-jss'
import color from 'color'
import {Button, Grid, Row, Col} from 'react-bootstrap'

jss.setup(preset());

var css = {
  listTable:{
    borderCollapse:'separate',
    minWidth: "100%",
    "& td":{
      padding: ".4rem .5rem",
      fontSize: 12
    },
    "& th":{
      padding: ".2rem .5rem",
      fontSize: 12,
      textAlign: "left",
      borderWidth: 0
    },
    "& tr:hover":{
        backgroundColor: color(Theme.primaryColor).lighten(1.5).desaturate(0.6).hexString(),  
        cursor:'pointer'
    },
    "& tr:nth-of-type(even)":{
        backgroundColor: '#e9e9e9',
        "&:hover":{
          backgroundColor: color(Theme.primaryColor).lighten(1.5).desaturate(0.6).hexString(),  
          cursor:'pointer'
        }
    },
    "& tr$selected:hover":{
            backgroundColor: color(Theme.primaryColor).lighten(0.2).hexString()
    },
    "& tr:nth-of-type(even)$selected":{
      backgroundColor: Theme.primaryColor,
      "&:hover":{
            backgroundColor: color(Theme.primaryColor).lighten(0.2).hexString()
          }
    },
    "& thead":{
      borderSpacing: 0
    }
  },
  
  selected:{
      backgroundColor: Theme.primaryColor,
      color: '#fff',
      "&:hover":{
          backgroundColor: color(Theme.primaryColor).lighten(0.2)
      }
  },
  columnsIcon:{
      fill: "#fff"
  }
};

class MultiColumnList extends React.Component{
  constructor(props){
    super(props);
    this.state={
        selected:-1
    };
  }
  
  onClickItem(key){
      this.setState({selected:key});
      this.props.onItemSelect(key);
  }
  
  isSelected(key){
      if(this.state.selected === key){
          return this.props.sheet.classes.selected;
      }else{
          return null;
      }
  }
  
  render(){
    const {classes} = this.props.sheet;
    
    //controls
    var controls;
    if(this.props.columnsTrigger){
        controls = null;
    }else{
        controls = <div style={{float:'right'}}><Button bsStyle="primary" bsSize="xsmall" title={"Show/Hide Data Columns"}>
                ...
            </Button></div>
    }
    
    //render content from contentData....
    var listItems = [];
    var columnHeaders;
    
    this.props.contentData.map(function(item, i){
        var listItem = [];
        var format = this.props.formatter(item);
        var headers = [];
        var headerCells = [];
        
        if(this.props.columnOrder){
            var columns = this.props.columnOrder;
        
            for(var j = 0; j < columns.length; j++){
                //update listing headers  
                  if(headers.indexOf(columns[j]) === -1 && this.props.defaultHidden.indexOf(columns[j]) === -1){
                    headers.push(columns[j]);
                  }

                  //create value cells...
                  if(this.props.defaultHidden.indexOf(columns[j]) === -1){
                  if(format.hasOwnProperty(columns[j])){
                    listItem.push(<td key={columns[j]}>{format[columns[j]](item)}</td>);
                  }else{
                    listItem.push(<td key={columns[j]}>{item[columns[j]]}</td>);  
                  }
                }
            }
        }else{
            for(var prop in item){

                  //update listing headers  
                  if(headers.indexOf(prop) === -1 && this.props.defaultHidden.indexOf(prop) === -1){
                    headers.push(prop);
                  }

                  //create value cells...
                  if(this.props.defaultHidden.indexOf(prop) === -1){
                  if(format.hasOwnProperty(prop)){
                    listItem.push(<td key={prop}>{format[prop](item)}</td>);
                  }else{
                    listItem.push(<td key={prop}>{item[prop]}</td>);  
                  }
               }
            }
        }
        listItems.push(<tr key={i} onClick={this.onClickItem.bind(this, i)} className={this.isSelected(i)}>{listItem}</tr>);
        headers.map((header, i)=> headerCells.push(<th key={i}>{header}</th>), this);
        columnHeaders = <tr>{headerCells}</tr>;
          
        
    }, this);
    
    return(
            <div>
                <table className={classes.listTable}>
                <thead>{columnHeaders}</thead>
                <tbody>{listItems}</tbody>
                </table>
            </div>
            );
  }
}

MultiColumnList.propTypes={
    contentData:React.PropTypes.arrayOf(React.PropTypes.object),
    formatter:React.PropTypes.func,
    defaultHidden: React.PropTypes.array,
    columnOrder: React.PropTypes.array
};

export default useSheet(MultiColumnList, css)