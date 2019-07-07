import React from 'react';

const Header = (props) => (
  <div className ="Header">
     <div className ="container">
        <h1 className ="Header__title">{props.title}</h1>
        {props.subtitile && <h2 className ="Header__subtitle">{props.subtitile}</h2>}
     </div>
  </div>
    
);

Header.defaultProps ={
    title: "Indesicion App"
};

export default Header;