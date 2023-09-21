import './Cssmediacontainer.css';
import netflix_tv from './netflix_tv.png'
import Paragraph from './Paragraph.jsx';
function Container(props){
    return(
        <>
        <div className="parent">
            <div className='container containerStyle'>
            
           

            
          
                   {props.first}    
                    
                

                
                  {props.second}
               
            </div>
        </div>
        </>
    )
};
export default Container;