import whiteLogo from "../images/uncoloured.png";
import colorLogo from "../images/coloured.png";


const Navbar = ({minimal,authToken, setShowModal,showModal,setIsSignUp}) => {
    

    const handleClick = () => {
        console.log("clicked at navbar")
        setShowModal(true);
        setIsSignUp(false);
    };

    return ( 
        <nav>
            <div className="logo-container">
            <img
                className="logo"
                src={minimal ? colorLogo : whiteLogo}
                alt="logo"
            />
            </div>
            {!authToken && !minimal && (
                <button
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
                >
                    Log in
                </button>
            )}
        </nav>
   );
}
 
export default Navbar;