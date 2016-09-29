import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import jss from 'jss'
import preset from 'jss-preset-default'
import useSheet from 'react-jss'

jss.setup(preset());

const css = {
    searchButton:{
        background: 'transparent',
        borderWidth: '0px',
        width: '40px',
        height: '40px',
        position: 'absolute',
        left: '.5em',
        top: '1em',
        pointerEvents: 'none'
      },
    clearButton:{
        background: 'transparent',
        borderWidth: '0px',
        width: '16px',
        height: '16px',
        position: 'absolute',
        right: '2.3em',
        top: '1.2em',
        cursor: 'pointer',
        display: 'none',
        '&:focus':{
            outline: 'none'
        }
    },
    searchIcon:{
      fill: '#666',
      color: '#666',
      fontSize: 26
    },
    clearIcon:{
        fontSize: 26,
        color: '#bbb',
        fill: '#ccc',
        transition: 'fill .2s ease, color .2s ease',
        '&:hover':{
            color: '#666'
        }
    },
    input:{
      width: '100%',
      height: '100%',
      padding: '1em 3.3em 1em 3.3em',
      borderWidth: '0px',
      backgroundColor: 'transparent',
      transition: 'background-color .2s ease',
      '&:hover':{
        backgroundColor: '#fff'
      },
      '&::-ms-clear':{
          display:'none'
      }
    },
    root:{
      width: '100%',
      height: '100%',
      position: 'relative'
    }
}

class SearchTrigger extends React.Component{
  constructor(props){
    super(props);
  }
  
  onFocus(){
    this.searchIcon.style.left = '.5em';
    this.textInput.style.backgroundColor = "#fff";
  }
  
  onChangeText(){
    if(this.textInput.val !== ""){
        this.textInput.style.backgroundColor = "#fff";
        this.clearButton.style.display = 'block';
    }
    
  }
  
  handleKeyPress(e){
      if(e.key === 'Enter'){
          this.props.onSearch(this.textInput.value);
      }
  }
  
  onBlur(){
    this.textInput.style.backgroundColor = "transparent";
  }
  
  clearSearch(){
    this.textInput.value ="";
    this.clearButton.style.display = 'none';
  }
  
  render(){
    const {classes} = this.props.sheet;
  
    return(<div className={classes.root} ref={(ref)=>this.root = ref}>
            <button className={classes.searchButton} ref={(ref)=> this.searchIcon = ref}>
            <span className={classes.searchIcon}><Glyphicon glyph="search"/></span>
            </button>
            <input type='text' ref={(ref)=>this.textInput = ref} className={classes.input} onFocus={this.onFocus.bind(this)} onChange={this.onChangeText.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} onBlur={this.onBlur.bind(this)}/>
            <button className ={classes.clearButton} ref={(ref)=> this.clearButton = ref} onClick={this.clearSearch.bind(this)} title={"Clear Search Field"}>
            <span className={classes.clearIcon}><Glyphicon glyph="remove-circle" /></span>
            </button>
                    </div>
            );
  }
}

export default useSheet(SearchTrigger, css)


