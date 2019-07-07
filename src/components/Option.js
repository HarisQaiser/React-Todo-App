import React from 'react';
import AddOption from './AddOption';

const Option = (props) => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__title'>Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteAll}>RemoveAll
          </button>
    </div>
    {
      props.options.length === 0 &&
      <p className= 'widget__message'>Please add an option to get started!</p>
    }

    {
      props.options.map((option, index) =>
        <AddOption
          key={option}
          optionText={option}
          count ={index + 1}
          handleDeleteOne={props.handleDeleteOne}
        />
      )
    }
  </div>
);

export default Option;