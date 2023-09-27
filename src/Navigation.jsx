import './Navigation.css';
import Netflix_logo from './Netflix_logo.png';
import './NavigationMedia.css';
function Navigation() {

    

    return (
        <>
           <div className='netflixIMG' > <img className='img' src='https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/aa3f04db-986c-4e24-b93a-d2728a853ad2/PK-en-20230731-popsignuptwoweeks-perspective_alpha_website_medium.jpg' >
            </img>
            </div>
            <div className='App_parent'>
                <div className='container firstCont' style={{  display: "flex", justifyContent: "space-between" }}>


                    <div  className='navLogo'>
                        <img src={Netflix_logo} />
                    </div>

                    <div className='navSignin'>
                        <button >Sign in</button>
                    </div>

                </div>


                <div className='container secondCont'  >

                    <div style={{ width: "80%", color: " white",  }}>
                     <div > <h1 className='second_cont_first_div' >  Unlimited movies, TV shows, and more</h1></div>
                     
                     <div  >
                        <h3 className='second_cont_second_div' style={{textAlign:"center"}} >Watch anywhere. Cancel anytime.</h3>
                        </div>
                    

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
            </div>
        </>
    )
};
export default Navigation;