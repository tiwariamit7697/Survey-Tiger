import MultiSelect from "./multi-select";
import SingleSelect from "./single-select";
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function CreateSurvey() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState("Select Question Type");

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {dropdownText}
        </DropdownToggle>
      <DropdownMenu>
      
        <DropdownItem onClick={()=>setDropdownText("Multi Select Questions")}>Multi Select Questions</DropdownItem>
        <DropdownItem onClick={()=>setDropdownText("Single Select Questions")}>Single Select Questions</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    {dropdownText==="Multi Select Questions" ? <MultiSelect/> : null}
    {dropdownText==="Single Select Questions" ? <SingleSelect/> : null}
    </>
  );
  }
  
  
  export default CreateSurvey;
  