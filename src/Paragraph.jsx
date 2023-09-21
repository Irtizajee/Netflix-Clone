import React from "react";
import './Cssmediacontainer.css';
function Paragraph(props){
    return(
        <>
        <div className='containerStylePara' >
        <h1>{props.h1}</h1>
                    <p> {props.p} </p>
                    </div>
        </>
    )
};
export default Paragraph;
