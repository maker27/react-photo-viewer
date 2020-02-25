import React from 'react';
import './photo.scss';

function Photo(props) {
	const {id, url, openPhoto} = props;
	return (
		<div className="photo"
			 style={{backgroundImage: `url(${url})`}}
			 onClick={ () => openPhoto(id) }> </div>
	);
}

export default Photo;
