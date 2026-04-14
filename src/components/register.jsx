import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideImage from "../assets/image.webp";

function Register() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!first || !last || !email || !password) {
        setError("Please fill in all fields");
        return;
        }

        setError("");
        alert("Registered Successfully!");
        navigate("/");
    };

    return (
        <div className="auth-wrapper">
        <div className="auth-container">

            <div className="auth-left">
            <h1>Create Account ✨</h1>
            <p>Please fill your details.</p>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="First Name"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                />

                <input
                type="text"
                placeholder="Last Name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                />

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

                <button type="submit">Sign Up</button>
            </form>

            <p className="switch-auth">
                Already have an account? <Link to="/">Login</Link>
            </p>
            </div>

            <div className="auth-right">
            <img src={SideImage} alt="Register Visual" />
            </div>

        </div>
        </div>
    );
    }

export default Register;