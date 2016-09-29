import React from 'react';
import jss from 'jss';
import useSheet from 'react-jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const css={
          blockLabel:{
            display: 'block',
            fontWeight: '700'
          }
}

function KeyValue(props){
  var {classes} = props.sheet;
  
  return(
          <div style={{marginBottom: '8px'}}>
            <label className={classes.blockLabel}>{props.label}</label>
            <div>{props.value}</div>
          </div>
          );
}

KeyValue.propTypes={
    label: React.PropTypes.string,
    value: React.PropTypes.node
};


export default useSheet(KeyValue, css)
