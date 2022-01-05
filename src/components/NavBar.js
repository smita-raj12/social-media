import React from "react";


let buttonStyles = {
    padding: '10px 10px 10px 10px',
    backgroundColor: 'white',
    width: '100px'  }

function NavBar(){
  return(
    <React.Fragment>
      <button style={buttonStyles} > Home </button>
      <button style={buttonStyles} >Notifications </button>
      <button style={buttonStyles} >Messages</button>
    </React.Fragment>
  );
}
export default NavBar;