import React from "react";

const Loader = ()=> {
    return (
        <div className="absolute top-1/2 left-1/2" style={{"transform":"translate(-50%, -50%)"}}>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
}

export default Loader;