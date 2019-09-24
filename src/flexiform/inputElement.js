import React from 'react';
import PropTypes from 'prop-types';

const InputElement =(props)=>{
    return(
    <div>
        <label>{props.inputLabel}</label>
        <input type={props.inputType} 
        name={props.inputName}
        value={props.inputValue}
        placeholder={props.inputPlaceholder}
        onChange={props.inputOnchange} />
    </div>
     )
}

InputElement.propTypes={
    inputLabel:PropTypes.string,
    inputType:PropTypes.string,
    inputName:PropTypes.string,
    inputValue:PropTypes.string,
    inputPlaceholder:PropTypes.string,
    inputOnchange:PropTypes.func
}

export default InputElement;