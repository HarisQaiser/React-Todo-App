import React from 'react';
import Options from './Options'; 
import Header from './Header';
import Action from './Action';
import Option from './Option';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component{
        state = {
           options: [],
           selectedOption: undefined
        };
    
    componentDidMount(){
       // console.log("Fetching Data");
       try{
        const json = localStorage.getItem("options");
        const dataFetched = JSON.parse(json);
        if(dataFetched){
        this.setState(()=> ({ options: dataFetched }))
        }
       } catch(e){
           // Do nothing all
  }
}

     componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
        //console.log("Saving Data");
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options",json);
  }
}
    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }
    handlePick =() => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        //alert(option);
        this.setState(() => ({
          selectedOption : option
        }));
     };
     clearModal = () => {
        this.setState(() => ({
             selectedOption : undefined
        }));

    };

    handleDeleteAll =() => {
       this.setState(() => ({ options:[] }));
    };

    handleDeleteOne =(optionToRemove) => {
        this.setState((prevState) => ({
        options : prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleAddOptions =(option) => {
        if(!option){
            return "Enter Valid value term";
        } else if(this.state.options.indexOf(option) > -1){
           return "This Option Already Exists";
        }
        
        this.setState((prevState)=> ({
            options: prevState.options.concat(option)
        }));
    };
    render(){
       // const title = "Indecision App";
       const subtitile = "Put your life in the hands of computer";
       // const options =["Thing one","Thing two","Thing three"];
        return(
    <div>
             <Header subtitile = {subtitile}/>
         <div className ="container">
             <Action hasOptions={this.state.options.length > 0}
                      handlePick={this.handlePick}/>
              <div className= 'widget'>       
             <Option  options ={this.state.options} 
                      handleDeleteAll={this.handleDeleteAll}
                      handleDeleteOne ={this.handleDeleteOne}/>
             
             <Options handleAddOptions ={this.handleAddOptions} />
        </div>
          </div>
             <OptionModal selectedOption ={this.state.selectedOption}
                          clearModal = {this.clearModal} />
    </div>
    );
  }
}

IndecisionApp.defaultProps ={
    option:[]
};

export default IndecisionApp;