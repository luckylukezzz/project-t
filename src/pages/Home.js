import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
import {useState,useEffect} from 'react';

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const authToken = false


    const handleClick = () => {
        console.log('clicked at home');
        setShowModal(true); 
    }
    useEffect(() => {
      console.log(showModal);
      }, [showModal]);
    return ( 
        <div className="overlay">
        <Navbar minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal}/>
        
        <div className="home">
                <h1 className="primary-title">Fast Date®</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>
        
        {showModal && (
            <AuthModal setShowModal={setShowModal}/>
        )}

        </div>
        </div>
     );
}

 
export default Home;