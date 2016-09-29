//Using react-bootstrap's dropdown...
import React from 'react';
import ReactDOM from 'react-dom'
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper'
import jss from 'jss';
import preset from 'jss-preset-default';
import useSheet from 'react-jss';

jss.setup(preset());

const css={
    dropdown:{
        position: 'absolute',
        top: '100%',
        right: 0,
        zIndex: 1000,
        display: 'none',
        float: 'left',
        minWidth: 160,
        padding: '5px',
        margin: '2px 0 0',
        fontSize: 14,
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: '#fff',
        backgroundClip: 'padding-box',
        border: '1px solid #ccc',
        borderRadius: 4,
        boxShadow: '0 6px 12px rgba(0,0,0,.175)'
    }
};

class PaneDropdownMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = e => this.setState({ value: e.target.value });

    this.state = { value: '' };
  }

  focusNext() {
   
  }

  render() {
     
    const {classes} = this.props.sheet;
    const { value } = this.state;
    
    var position = {
        left:this.props.pullRight? 'initial':'0',
        display: this.props.open? 'block':'none',
        right: this.props.pullRight? '0':'initial'
    };
    
    var menu = <div className={classes.dropdown} style={position}>
              <ul className="list-unstyled">
                {React.Children.toArray(this.props.children).filter(child => (
                  !value.trim() || child.props.children.indexOf(value) !== -1
                ))}
              </ul>
            </div>
    
    if(this.props.open){
      return (
              <RootCloseWrapper noWrap={true} onRootClose={this.props.onToggle}>
              {menu}
              </RootCloseWrapper>
              )
    }
    
    return menu;
  }
}

export default useSheet(PaneDropdownMenu, css)