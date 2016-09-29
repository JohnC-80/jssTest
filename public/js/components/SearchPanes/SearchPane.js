import React from 'react'
import Pane from '../Pane/Pane'
import PaneHeader from '../PaneHeader/PaneHeader'
import SearchTrigger from '../SearchTrigger/SearchTrigger'
import {Button} from 'react-bootstrap'
import Theme from '../../theme'

import jss from 'jss'
import preset from 'jss-preset-default'
import useSheet from 'react-jss'

jss.setup(preset());

const css = {
  filterPaneLabel:{
    display: 'block',
    textTransform: 'uppercase',
    color: '#777'
  },
  filterPaneOption:{
      backgroundColor: '#f6f6f6',
      borderRadius: '4px'
  },
  filterPaneButton:{
      backgroundColor: Theme.primaryColor
  }
};

class SearchPane extends React.Component{
  constructor(props){
    super(props);
  }
  
  onSearchEntered(value){
    this.props.onSearch(value);
  }
  
  render(){
    const {classes} = this.props.sheet;
    var searchHeader = <PaneHeader>
                        <SearchTrigger onSearch={this.onSearchEntered.bind(this)} fieldValue={this.props.fieldValue}></SearchTrigger>
                       </PaneHeader>;
                       
        var searchContent = <div><label className={classes.filterPaneLabel}>Filters</label>
                        <ul className='list-unstyled'>
                          <li><input type='checkbox' id='SearchPatronsCB'/> <label htmlFor='SearchPatronsCB'>Patrons</label></li>
                          <li><input type='checkbox' id='SearchStaffCB'/> <label htmlFor='SearchStaffCB'>Staff Members</label></li>
                        </ul>
                      <label className={classes.filterPaneLabel}>Actions</label>
                        <ul className='list-unstyled'>
                          <li><Button block bsStyle={"primary"}>New Patron</Button></li>
                        </ul></div>;
    return(
            <Pane defaultWidth="20%" header={searchHeader} content={searchContent}>
              
            </Pane>
            )
  }
}

export default useSheet(SearchPane, css)