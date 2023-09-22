import { useEffect, useState } from "react";
import plus from './plus.png';
import cross from './cross.png';


function Askedquestion(props) {


    // let Question_div_second_hide = document.getElementById("question_div_second_hide").style.display;
    let [question_div_second_display, setQuestion_div_second_display] = useState({
        display: "none"
    })

    let [cross_plus, setCross_plus] = useState(plus);



    let [rotate_plus_cross, setRotate_plus_cross] = useState();

    let [i, setI] = useState(0)

    function display_hide_block(e) {



      console.log(e)

        if (i == 0) {
            setQuestion_div_second_display({
                display: "block",
                transition: ".5s ease-in-out"
            })
            setI(i + 1)
            // console.log(i)
            setCross_plus(cross)

            // setRotate_plus_cross({
            //     transform:"rotate(90deg)",
            //     transition:".4s ease-in-out"
            // })



        }
        else if (i == 1) {
            setQuestion_div_second_display({
                display: "none",
                transition: ".5s ease-in-out"

            })       
            setI(i - 1)

            setCross_plus(plus)
            // console.log(i)

        }

        // console.log(i)



    }
    
    return (
        <>
            <div onClick={display_hide_block} className="question_div_second" style={{ textAlign: "left" }}>
                <div> {props.Question}</div>
                <div style={rotate_plus_cross}>
                    <img src={cross_plus} alt="plus" />
                </div>
            </div>

            <div id="question_div_second_hide" className="question_div_second_hide" style={question_div_second_display}>
           {props.p1}
           
           {props.space}
         
        
          {props.p2}
         

           
           
            </div>
        </>
    );
};
export default Askedquestion;