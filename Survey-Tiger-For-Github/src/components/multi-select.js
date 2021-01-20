import { useState } from 'react';
import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
function MultiSelect() {
  const [options,setOptions]=useState([""]);
  const [question,setQuestion]=useState("");

  const addOption=(optionIndx)=>{
    if(options.length<4)
    {
      const newOptions=[...options,""];
      const desiredIndx=optionIndx+1;
      let currentIndx=newOptions.length-1;
      while(currentIndx!==desiredIndx)
      {
        newOptions[currentIndx]=newOptions[currentIndx-1];
        currentIndx--;
        newOptions[currentIndx]="";
      }
      setOptions(newOptions);
    }  
  }

  const removeOption=(optionIndx)=>{
    if(options.length>1)
    {
      options.splice(optionIndx,1);
      setOptions([...options]);
    }
  }
  
  const setOptionInArr=(value,optionIndx)=>
  {
    options[optionIndx]=value;
    setOptions([...options]);
  }
  const isAddQuestionPublishDisabled=()=>
  
    question.trim()=== "" ||
    options.find((opt)=>opt.trim()==="") !== undefined
  
    return (
     <div className="question-container">
      <InputGroup className="input-grp">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Your Question" onChange={evt=>setQuestion(evt.target.value)} value={question} />
      </InputGroup>
        <p className="optionClass">options</p>
        
      {options.map((option,optionIndx)=>(
        <InputGroup className="input-grp" key={optionIndx}>
        <Input  placeholder={`Option ${optionIndx + 1}`}  value={option} onChange={e=>setOptionInArr(e.target.value,optionIndx)}/>
        <InputGroupAddon addonType="append">
            <Button disabled={options.length===4} onClick={()=>addOption(optionIndx)}>+</Button>
            <Button disabled={options.length===1} onClick={()=>removeOption(optionIndx)} >-</Button>
        </InputGroupAddon>
      </InputGroup>
      ))}
        { options.length===4 ?
        <div className="question-buttons"> 
        <Button className="survey-main-btn" disabled={isAddQuestionPublishDisabled()}>Add Question</Button>
        <Button className="survey-main-btn" disabled={isAddQuestionPublishDisabled()}>Publish</Button>
        </div> :null}
   </div>
  
    );
  }
  
  export default MultiSelect;
  