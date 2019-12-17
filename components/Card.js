import React from "react";
import Button from "./Button";

const Card = ({ title }) => (
    <>
        <h1>{title}</h1>
        <Button>Context</Button>
    </>
);

export default Card;
