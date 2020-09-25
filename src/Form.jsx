import React from "react";
import {useState} from "react";
import "./Form.css";
import Input from "./Input";
function Form() {

     const [list,setList]=useState("");
     var [lists,setListItem]=useState([]);
    function handleChange(event)
    {
        const value=event.target.value;
        setList(value);
           
    }
    function handleClick()
    {
       setListItem(preValue=>{
           return[...preValue,list]
       })
       setList("");
      // event.preventDefault();
    }
    return (<div className="main">
        <div>
            <form>
                <Input
                    type="text"
                    placeholder="Enter First Name"
                    name="fname"
                    value={list}
                    onChange={handleChange}
                />
                <button type="button" 
                  onClick={handleClick}
                  className="btn btn-primary btn-block">
                  Add
                </button>
            </form>
            <div className="list">
                <ul className="list-group ">
                    {lists.map(lis=>{return<li className="list-group-item ">{lis}</li>})}
                </ul>


            </div>


        </div>


    </div>);

}
export default Form;