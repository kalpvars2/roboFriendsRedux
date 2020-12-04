import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	const cardsArray = robots.map(user => <Card key={user.id} id={user.id} email={user.email} name={user.name}/>);
	return (
		<div>
		    {cardsArray}
	    </div>
	);
}

export default CardList;