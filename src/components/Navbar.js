import whiteLogo from "../images/uncoloured.png";
import colorLogo from "../images/coloured.png";


const Navbar = ({minimal,authToken}) => {
    return ( 
        <nav>
            <div className="logo-container">
            <img
                className="logo"
                src={minimal ? colorLogo : whiteLogo}
                alt="logo"
            />
            </div>
            {!authToken && minimal && (
                <button
                className="nav-button"
                >
                    Log in
                </button>
            )}
        </nav>
   );
}
 
export default Navbar;