import React from 'react';

const AddOption = (props) => (
         <div>
           <div className= 'option option__text'>
             <p>{props.count}.{props.optionText}</p>
               <button 
               className = "button button--link"
               onClick ={() =>{
                   props.handleDeleteOne(props.optionText);
               }}
               >
               remove
               </button>
        </div>
         </div>
);

export default AddOption;

