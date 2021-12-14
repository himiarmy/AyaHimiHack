import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import "./Header.css";

const Header = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  return (
    <nav>
      Header
      <div>
        {email ? (
          <Link to="/auth">
            <button className="sign-btn" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        ) : null}

        {email ? null : (
          <Link to="/auth">
            <button className="sign-btn">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
