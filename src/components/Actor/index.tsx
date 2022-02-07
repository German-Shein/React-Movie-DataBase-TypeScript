import React from "react";
import { Wrapper, Image } from "./Actor.styles";

type Props =
{
    name: string;
    character: string;
    imageUrl: string;
}

const Actor: React.FC <Props> = ({ name, character, imageUrl }) => (
    <Wrapper>
        <Image alt={name + " Thumbnail"} src={imageUrl} />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

export default Actor;