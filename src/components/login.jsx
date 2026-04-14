import { useState } from "react";
import { Link } from "react-router-dom";
import SideImage from "../assets/image.webp";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
        setError("Please fill in all fields");
        return;
        }

        setError("");
        alert(`Logged in with ${email}`);
    };

    return (
        <div className="auth-wrapper">
        <div className="auth-container">

            {/* LEFT SIDE */}
            <div className="auth-left">
            <h1>Welcome back 👋</h1>
            <p>Please enter your details.</p>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Log In</button>
            </form>

            <p className="switch-auth">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="auth-right">
            <img src={SideImage} alt="Login Visual" />
            </div>

        </div>
        </div>
    );
    }

export default Login;