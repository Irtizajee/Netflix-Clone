// import { useState } from "react";
import Askedquestion from './Askedquestion.jsx';
import './Question.css'; 
import './Cssmediacontainer.css';
import Break from './Break.jsx';


function Question(props) {

    

    return (
        <>
            <div className="parent questionParent">
                <div className='container containerStyle question_div' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <div >
                        <h1>
                            {props.h}
                        </h1>
                    </div>
                    
                    <Askedquestion Question="What is Netflix?" p1="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." space={ <Break /> }   p2="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!" />

                    <Askedquestion Question="How much does Netflix cost?" p1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts." />

                    <Askedquestion Question="Where can i watch?" p1="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." 
                     space={ <Break /> } 
                     p2="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
                    />
                    <Askedquestion Question="How do i cancel?"
                    p1="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />

                    <Askedquestion Question="What can i watch on Netflix?"  p1="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."/>

                    <Askedquestion Question="Is Netflix good for kids?" p1="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
                     space={ <Break /> } 
                     p2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
                    />

                    <div >
                        <h3 className='second_cont_third_div' >
                        Ready to watch? Enter your email to create or restart your membership.
                        </h3>
                     </div>
                    <div className='second_cont_forth_div' style={{marginTop:"20px"}}>
                       <center> <input  type="text" placeholder='Email Address' />
                        <input  type="button" value="Get Started >" /></center>
                     </div>

                    
                    


                </div>



            </div>
        </>
    )
};
export default Question;