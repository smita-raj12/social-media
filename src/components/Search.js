import React from "react";


function Search(){
    let floatRight = {
        float: 'right'
    }
    
    return(
    <React.Fragment>
        <input style = {floatRight} id="home" type="text" value="Search"/>
    </React.Fragment>
    );
}
export default Search;