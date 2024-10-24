import React from 'react';

// components
import Navbar from '../components/navbar/Navbar.Component';

const DefaultLayoutHOC = (Components) =>({...props})=> {
  return (
    <div>
      <Navbar/>
      <Components {...props}/>
      <div>footer</div>
    </div>
  );
}

export default DefaultLayoutHOC;