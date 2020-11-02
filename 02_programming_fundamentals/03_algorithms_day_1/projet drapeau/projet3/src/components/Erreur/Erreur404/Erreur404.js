import React from "react";
import imgErreur404 from "../../../asset/images/error404.png";

const erreur404 = (props) => (
    <div>
        <img src={imgErreur404} alt='erreur 404' width="300px" />
        <div>La page demandée n'existe pas</div>
    </div>
);

export default erreur404;