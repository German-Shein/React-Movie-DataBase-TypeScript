import { Content, Wrapper } from './SearchBar.styles';
import React, {Component, useEffect, useRef, useState} from 'react';
import searchIcon from '../../images/search-icon.svg'

type Props =
{
	setSearchTerm: React.Dispatch <React.SetStateAction <string>>;
}

const SearchBar: React.FC <Props> = ({setSearchTerm}) => 
{
	const [state, setState] = useState ('');
	const initial = useRef (true);

	useEffect (() =>
	{
		if (initial.current)
		{
			initial.current = false;
			return;
		}
		const timer = setTimeout (() =>
		{
			setSearchTerm (state);
		}, 500);

		return () => clearTimeout (timer);
	}, [setSearchTerm, state]);

	return (
		<Wrapper>
			<Content>
				<img alt="Search Icon" src={searchIcon}></img>
				<input onChange={event => setState (event.currentTarget.value)} placeholder="Search for a movie" type="text" value={state}></input>
			</Content>
		</Wrapper>
	);
}

export default SearchBar;