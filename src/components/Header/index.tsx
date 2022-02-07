import { Link } from 'react-router-dom';
import React from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';

const Header: React.FC = () => (
	<Wrapper>
		<Content>
            <Link to="/">
                <LogoImg alt="rmdb-logo" src={RMDBLogo} />
            </Link>
			<TMDBLogoImg alt="tmdb-logo" src={TMDBLogo} />
		</Content>
	</Wrapper>
);

export default Header;