const Home = () => {
    const authToken = true
    const handleClick = () => {
        console.log('cliced');
    }

    return ( 

        

        <div className="home">
                <h1 className="primary-title">Fast Date®</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>


        </div>

     );
}

 
export default Home;