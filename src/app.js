import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndesicionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// const Layout = (props) =>{
//     return(
//         <div>
//         <p>Header</p>
//         {props.children}
//         <p>Footer</p>
//         </div>
//     );
// };


// ReactDOM.render((
//     <Layout>
//       <div>
//         <h1>Page title</h1>
//         <h2>This is my page.</h2>
//       </div>
//     </Layout>
// ), document.getElementById('app'));

    

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike'; 
//         this.getGreeting = this.getGreeting.bind(this);

//     }
//     getGreeting(){
//         return `Hi.My name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//    name = "Jen";
//    getGreeting = () =>{
//        return `Hi.My name is ${this.name}.`;
//    }
// }

// const newSyntax = new NewSyntax();
// const GETGreeting = newSyntax.getGreeting;
// console.log(GETGreeting());




// const jsx =(
//     <div>
//         <Header />
//         <Action />
//         <Option />
//         <AddOption />
//     </div>
// ); 







// import "./utils.js";
//import subtract ,{ square, add, } from './utils.js';

//import isSenior, { isAdult, canDrink} from './person.js'

// console.log("app.js is running!");
// console.log(square(4)); 
// console.log(add(5,4));
// console.log(subtract (100,10));


// console.log(isAdult(18));
// console.log(canDrink(23));
// console.log(isSenior(58));
