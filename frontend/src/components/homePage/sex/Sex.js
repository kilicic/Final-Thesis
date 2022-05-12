import React, {useState} from "react";
import { groups } from "./groups.js";
import '../category/CategoryList.css';

export default function GroupList() { 
  return(
    <div>
    <h1>Unesite skupinu ispitanika</h1>
    <ul className="checkbox-list">
           {groups.map(({ name, id }) => {
          return (
            <li key = {id}>
              <div className="category-list-item">
                  <input
                    type="checkbox"
                    id={id}
                    name={name}
                    value={id}
                  /><label htmlFor={id}>{name}</label>
                </div>
            </li>
          );
        })}
        </ul>
        <hr/> 
        <button className='button'>Spremi</button>
        </div>
  )
}