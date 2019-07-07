import React from 'react';

export default class Options extends React.Component{
state ={
            error: undefined
        };
      handleAddOptions =(e) => {
            e.preventDefault();
            console.log('testing');

            const option = e.target.elements.option.value.trim();
           // this.props.handleAddOptions(option);
            const error = this.props.handleAddOptions(option);
            
            this.setState(() => ({error}));
             
             if(!error){
                e.target.elements.option.value = "";
             }
            };

    render() {
        return(
            <div>
            {this.state.error && <p className ='add-option-error'>{this.state.error}</p>}
              <form className= 'add-option' onSubmit = {this.handleAddOptions}>
               <input className= 'add-option__input' name ="option" type="text"></input>
               <button className='button'>Add Option</button>
            </form>
            </div>
    );
  }
}
