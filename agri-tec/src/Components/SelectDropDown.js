import React from 'react'
import { useState } from 'react'
import Select from 'react-select';
import '../style.css'
const SelectDropDown = ({selectItems,selectedOption,handleChange}) => {
    const filterOptions = (option, inputValue) => {
        return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
    }
  return (
    <div style={{ width:'90%'}}> 
      <Select
      placeholder="Select Option"
      isClearable={true}
      value={selectedOption}
      options={selectItems}
      onChange={handleChange}
      getOptionLabel={e => (
        <div
        
        >
            {e.icon}
            <span style={{marginLeft:5}}>{e.category}</span>
        </div>
      )} 

      // filterOption={filterOptions}
      />
      {selectedOption && <div style={{marginTop:20,lineHeight:'25px'}}>
        <b>Selected Option:</b>{selectedOption.id}
        </div>}
    </div>
  )
}

export default SelectDropDown