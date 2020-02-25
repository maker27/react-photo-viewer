import React from 'react';
import './modal-window.scss';
import Form from "../form";
import Comment from "../comment";
import CloseButton from "../close-button";

function ModalWindow(props) {
	const {photo: {id, url, comments}, closeModal, updateComments} = props;
	return (
		<div className="modal-window">
			<div className="modal-content">
				<div className="modal-image">
					<img src={ url } alt={ 'Фото №' + id }/>
				</div>
				<Form id={id} updateComments={updateComments}/>
				<div className="modal-comments">
					{
						comments.length
							? comments.map(({id, text, date}) => <Comment key={id} text={text} date={date}/>)
							: <div>Прокомментируйте первыми!</div>
					}
				</div>
				<CloseButton closeModal={closeModal} />
			</div>
		</div>
	);
}

export default ModalWindow;
