import React from "react";
function PRC(){
    return(
<> 
<div className="wrap">
<h2>Hello Lucky</h2>
<p>Hey! you wanna try your lucky number <br /> 
Place wish on your Mind nand then refresh.</p>
<h4>your lucky number is :</h4> <h2>{Math.floor(Math.random()*10)}</h2>

</div>

</>
)
}

export default PRC