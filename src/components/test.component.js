import React, {Component, useState} from 'react'

export default function Test(props) {
    const [value, setValue] = useState('Mike');
    const [defaultColor, setDefaultColor] = useState('white');
    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleColorChange(event){
        setDefaultColor(event.target.value)
    }

     function handleSubmit(event) {
      alert('A name was submitted: ' + value);
      event.preventDefault();
    }
       return (
        <form onSubmit={handleSubmit} style ={{margin: "50px"}}>
          <label>
            Name:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <label>
          Color:
          <input type="text" value={defaultColor} onChange={handleColorChange} />
        </label>

          <input type="submit" value="Submit" />
          <div style = {{color: defaultColor}}>{value}</div>
        </form>
      );
      }
 