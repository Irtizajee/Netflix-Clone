import Container from './Container.jsx';

import Paragraph from './Paragraph.jsx';

import Navigation from './Navigation.jsx';

import Image from './Image.jsx';

import container_2 from './container_2.jpg';
import netflix_tv from './netflix_tv.png';
import container_3 from './container_3.png';
import Question from './Question.jsx';

import NetflixAnimi from './NetflixAnimi'

function App() {

  // second={<Image img={netflix_tv} />}
  return (
    <>
     <Navigation />
     <Container  first={<Paragraph h1="Enjoy on your TV" p="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." />}  second={<NetflixAnimi/>} />

     <Container  first={<Image img={container_2} />}  second={<Paragraph h1="Download your shows to watch offline" p="Save your favorites easily and always have something to watch." />} />

     <Container second={ <Paragraph h1="Watch everywhere" p="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." /> } />

     <Container first={ <Image img={container_3} /> }  second={ <Paragraph h1="Create profiles for kids" p="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." /> } />

     <Question h="Frequently Asked Questions"   />

    </>
  );
}

export default App;
