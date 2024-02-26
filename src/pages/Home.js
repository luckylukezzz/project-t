import Navbar from "../components/Navbar";

const Home = () => {
    const authToken = false
    const handleClick = () => {
        console.log('cliced');
    }
    
    return ( 
        <>
        <Navbar minimal={true} authToken={authToken}/>
        
        <div className="home">
                <h1 className="primary-title">Fast Date®</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>


        </div>
        </>
     );
}

 
export default Home;