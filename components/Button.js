import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const getThemeStyles = theme => {
    if (theme === "dark") {
        return {
            backgroundColor: "#000",
            color: "#fff",
        };
    }
};

const Button = ({ children }) => {
    const theme = useContext(ThemeContext);
    const styles = getThemeStyles(theme);

    return (
        <button
            style={{
                ...styles,
                padding: "15px",
                fontSize: "20px",
            }}
        >
            {children}
        </button>
    );
};

export default Button;
