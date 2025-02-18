import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.js";
import add from "../assets/addAnavatar.png";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // State for popup error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error state

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // Check if any field is empty
    if (!name || !email || !password || !file) {
      setError("Please fill out all fields.");
      setTimeout(() => setError(""), 4000); // Hide popup after 4s
      setLoading(false);
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", res);
      alert("Signup Successful!");
      navigate("/"); // Redirect to home
    } catch (error) {
      console.error("Signup Error:", error);
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container" style={styles.formContainer}>
      <div className="form-wrapper" style={styles.formWrapper}>
        <span className="logo" style={styles.logo}>Aayush Verma</span>
        <span className="title" style={styles.title}>Register</span>

        {error && (
          <div className="popup-error" style={styles.popupError}>
            <div className="error-circle" style={styles.errorCircle}>
              <span style={styles.errorCross}>✖</span>
            </div>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" placeholder="Username" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file" style={styles.fileLabel}>
            <img src={add} alt="Add Avatar" style={styles.avatarImg} />
            <span>Add an avatar</span>
          </label>
          <button style={styles.button} disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p style={styles.loginText}>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

// CSS styles inside JSX
const styles = {
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#2C3E50",
  },
  formWrapper: {
    background: "#fff",
    padding: "10px 20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  title: {
    fontSize: "20px",
    color: "#666",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "22vw",
  },
  fileLabel: {
    display: "flex",
    alignItems: "center",
    color: "#8da4f1",
    gap: "10px",
    cursor: "pointer",
    justifyContent: "center",
    marginTop: "10px",
  },
  avatarImg: {
    height: "40px",
    width: "40px",
  },
  button: {
    background: "#3498db",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
  loginText: {
    marginTop: "10px",
    color: "#666",
  },

  // Popup Styles
  popupError: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "white",
    color: "#333",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    animation: "slideUp 0.3s ease-out",
  },
  errorCircle: {
    position: "relative",
    width: "30px",
    height: "30px",
    background: "red",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    fontSize: "18px",
    fontWeight: "bold",
    animation: "pulse 1s infinite",
  },
  errorCross: {
    fontSize: "18px",
  },
};

// Inline animation keyframes
const keyframes = `
@keyframes slideUp {
  from {
    transform: translate(-50%, 50px);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
`;

// Add keyframes dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

export default Signup;