import { useState } from "react"

const AuthModal = ({setShowModal , isSignUp , setIsSignUp}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    const handleClick = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match!')
            }
            console.log("need to end post req");
        } catch (e) {
            console.log(e.message);
        }
    };


    return ( 

        <div className="auth-modal">
        <div className="close-icon" onClick={handleClick}>ⓧ</div>
        
        <h2>{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h2>
        <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp && <input
                type="password"
                id="password-check"
                name="password-check"
                placeholder="confirm password"
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />}
            <input className="secondary-button" type="submit"/>
            <p>{error}</p>
            <hr/>
            <h2>Get the app</h2>
        </form>
        </div>
        

    );
}
 
export default AuthModal;