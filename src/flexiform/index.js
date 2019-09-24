import React,{useState} from 'react';
import PropTypes from 'prop-types';
import InputElement from './inputElement';
import SelectBox from './selectBox';

const FlexiForm = (props)=>{  
    const [nameState,setNameState]=useState({
    name:'',
  });
    const [addressState,setAddressState]=useState({
        address:'',
    });
    const [validState,setValidState]=useState({
        state:'',
    });
    const formconfig =props.config.items;
    let inpuElem;
    let selectElem;
    const onsubmit=(e)=>{
        e.preventDefault();
        if(nameState.name!=='' && addressState.address!==''){
            props.flexiCallBack(nameState,addressState);
            setValidState({...validState,state:''});            
        }else{
            setValidState({...validState,state:'Please enter name and address'});            
        }
    }   
 
    formconfig.forEach((item)=>
        {
            if(item.type==='TextField'){
                inpuElem = <InputElement
                    inputLabel={item.label}
                    inputType='text'
                    inputName={item.name}
                    inputValue={nameState.name}
                    inputPlaceholder='Please Enter name'
                    inputOnchange={(e)=>{
                        e.preventDefault();
                        setNameState({...nameState,name:e.target.value});            
                    }}
                /> 
            }
            if(item.type==='DropDown'){
                selectElem=<SelectBox
                    selectboxLabel={item.label}
                    selectboxName='DropDown'
                    selectboxValue={addressState.address}
                    selectboxOnchange={(e)=>{
                        e.preventDefault();
                        setAddressState({...addressState,address:e.target.value});  
                    }}
                    selectboxPlaceholder='Please select state'
                    optionValues={item.values}
                />
            }
        }
    )
    return(
        <div className='container'>
            <form className='flexiform'>
                <h1>Flexi form</h1>
                <p>{validState.state}</p>
                <div className='form'>
                     {inpuElem}
                     {selectElem}
                    <button onClick={onsubmit} type='button'>Submit</button>
                </div>
            </form>
        </div>
    )
}
FlexiForm.propTypes={
    config:PropTypes.object,
    flexiCallBack:PropTypes.func
}

export default FlexiForm
