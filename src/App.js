import React,{useState} from 'react';
import axios from 'axios';
import FlexiForm from './flexiform';
import './App.css';

const flexiConfig= {
	"items": [{
			"name": "person_name",
			"label": "Person's Name",
			"type": "TextField"
		},
		{
			"name": "states",
			"label": "Person's state",
			"type": "DropDown",
			"values": [
				"Maharashtra",
				"Kerala",
				"Tamil Nadu"
			]
		}
	]
}


const App=()=> {
	const [formResponse,setFormResponse]=useState({
		value:'',
		responseStyle:'none'
	});
	
  const onFlexiSubmit = (name,address)=>{
  
	axios.post('https://jsonplaceholder.typicode.com/posts', {
		person_name: name,
		address: address
		})
		.then(function (response) {
			if(response.status===201||response.status===200){
				setFormResponse({...formResponse,value:'Form successfully submitted',responseStyle:'success'});				
			}else{
				setFormResponse({...formResponse,value:'There is some error',responseStyle:'fail'})
			}
			setTimeout(()=>{
				 setFormResponse({...formResponse,value:'',responseStyle:'none'}) }, 
			3000);
		})
		.catch(function (error) {            
			setFormResponse({...formResponse,value:'There is some error',responseStyle:'fail'});
			setTimeout(()=>{
				 setFormResponse({...formResponse,value:'',responseStyle:'none'}) }, 
			3000);
		});
  }

  return (
    <div>
	  <div className={formResponse.responseStyle}>{formResponse.value}</div>
      <FlexiForm config={flexiConfig} flexiCallBack={onFlexiSubmit} />
    </div>
  );
}

export default App;
