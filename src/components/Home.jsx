import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() 
{
    const navigate = useNavigate();


    return(
      <>
          <h1>
            <div className="mainContent">
              <img
              id="Minifigure"
              className="mainHomePhoto"
              src="https://s3-us-west-2.amazonaws.com/media.brothers-brick.com/2020/01/LEGO-Collectible-Minifigures-71026-DC-Super-Heroes-Feel-Guide-Cover.jpg"
              alt="mini"
            />
            </div>
          </h1>
      </>
  );
}

export default Home;