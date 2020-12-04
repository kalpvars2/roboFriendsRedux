import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input onChange={searchChange} className = "pa3 ba b--green tc bg-lightest-blue" type="search" placeholder="Search Robots" />
		</div>
	);
}

export default SearchBox;