import React from "react";

const titreh1 = (props) => {
    const classesCss = `border border-grey bg-warning p-2 m-2 rounded text-white text-center`
    return (
        <h1 className={classesCss}>{props.children}</h1>
    );
};

export default titreh1;