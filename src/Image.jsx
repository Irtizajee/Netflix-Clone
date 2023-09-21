import netflix_tv from './netflix_tv.png'
import './Cssmediacontainer.css';
function Image(props){
    return(
        <>
        <div className='containerStyleImg'>
        <img src={props.img} alt="" />
        </div>
        </>
    )
};
export default Image;