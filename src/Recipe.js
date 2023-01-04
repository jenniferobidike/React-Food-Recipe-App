import React from "react";
import style from './recipe.module.css';
import { v4 as uuidv4 } from "uuid";
  
const Recipe = ({label,image,url,ingredients}) =>{
    return(
        <div key={uuidv4()} className={style.recipe}>
            <h2>{label}</h2>
            <ul>
                {ingredients.map(ingredient=>(
                    <li key={uuidv4()}>{ingredient.text}</li>
                ))}
            </ul>
            
           <button className={style.url}><a className={style.link} href={url} target="_blank" rel="noopener noreferrer">
        Recipe Details
      </a></button>
            <img className={style.image} src={image} alt="label"/>
  
        </div>
    );
  
}
export default Recipe;