import React from "react";

const Loader = () => {
    return (
        <span className="loading loading-ring loading-lg fixed left-1/2 top-1/2" style={{transform: "translate(-50%, -50%)"}}></span>
    );
}

export default Loader;