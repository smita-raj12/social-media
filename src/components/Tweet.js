import React from "react";

function Tweet(){

    let padding = {
        float: 'right'
    }
  return(
    <React.Fragment>
      <input style = {padding} id="home" type="text" value="Tweet"/>
    </React.Fragment>
  );
}
export default Tweet;