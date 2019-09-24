import React from 'react';
import PropTypes from 'prop-types'

const SelectBox = (props)=>{
    return(
        <div>
            <label>{props.selectboxLabel}</label>
            <select name={props.selectboxName} 
            value={props.selectboxValue}
            onChange={props.selectboxOnchange}>
            <option value=''>{props.selectboxPlaceholder}</option>
            {props.optionValues.map((optn,index)=><option key={index} value={optn}>{optn}</option>)}
            </select>
        </div>
    )
}

SelectBox.propTypes={
    selectboxLabel:PropTypes.string,
    selectboxName:PropTypes.string,
    selectboxValue:PropTypes.string,
    selectboxOnchange:PropTypes.func,
    selectboxPlaceholder:PropTypes.string,
    optionValues:PropTypes.array,
}

export default SelectBox