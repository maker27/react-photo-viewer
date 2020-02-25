import React from 'react';
import './comment.scss';
import {dateFormat} from "../../utils";

function Comment(props) {
	const {date, text} = props;
	return (
		<div className="comment">
			<div className="comment-date">
				{ dateFormat(date) }
			</div>
			<div className="comment-text">
				{ text }
			</div>
		</div>
	);
}

export default Comment;
