import { Image } from './Thumb.styles';
import { Link } from 'react-router-dom';
import React from 'react';

type Props =
{
    alternative: string;
	image: string;
    movieId?: number;
    clickable: boolean;
}

const Thumb: React.FC <Props> = ({alternative, image, movieId, clickable}) => (
    <div>
        {clickable ? (<Link to={`/${movieId}`}><Image alt={alternative} src={image} /></Link>) : (<Image alt={alternative} src={image} />)}
    </div>
);

export default Thumb;