import React,{useState} from 'react';
import PropTypes from 'prop-types';

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
                inpuElem =  <div>
                                <label>{item.label}</label>
                                <input type='text' 
                                name={item.name} 
                                value={nameState.name} 
                                placeholder='Please enter name'
                                onChange={(e)=>{
                                    e.preventDefault();
                                    setNameState({...nameState,name:e.target.value});            
                                }} />
                            </div>; 
            }
            if(item.type==='DropDown'){
                selectElem=<div>
                    <label>{item.label}</label>
                    <select name='DropDown' 
                    value={addressState.address}
                    onChange={(e)=>{
                        e.preventDefault();
                        setAddressState({...addressState,address:e.target.value});  
                    }}>
                    <option value=''>Please select state</option>
                    {item.values.map((optn,index)=><option key={index} value={optn}>{optn}</option>)}
                    </select>
                </div>;
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
FlexiForm.prototype={
    config:PropTypes.object,
    flexiCallBack:PropTypes.func
}

export default FlexiForm