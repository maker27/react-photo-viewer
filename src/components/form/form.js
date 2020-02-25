import React, {Component} from 'react';
import './form.scss';

import {photoService} from "../../services";

function FormInput(props){
	const {label, text, onChangeInput} = props;
	return (
		<input type="text" placeholder={label} value={text} onChange={onChangeInput} />
	);
}

class Form extends Component {
	state = {
		status: 0,
		name: '',
		message: ''
	};

	onChangeInput = id => e => {
		const {value} = e.target;
		const text = value.replace(/['"]|^\s/, '').replace(/\s{2,}/, ' ');
		this.setState({
			[id]: text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
		});
	};

	onSubmit = id => e => {
		e.preventDefault();

		let {name, message, status} = this.state;

		name = name.trim();
		message = message.trim();
		if(!name || !message || status){
			return;
		}

		const setStatus = (status) => {
			this.setState({status});
		};
		setStatus(1);
		photoService.addComment(id, name, message)
			.then(({status}) => {
				if(status === 204){
					this.setState({
						message: '',
						status: 0
					});
					this.props.updateComments(id);
				}else{
					setStatus(0);
				}
			})
			.catch(() => {
				setStatus(0);
			});
	};

	render(){
		const {id} = this.props;
		const {name, message} = this.state;
		return (
			<div className="modal-form">
				<form onSubmit={this.onSubmit(id)}>
					<FormInput label="Ваше имя" text={name} onChangeInput={this.onChangeInput('name')}/>
					<FormInput label="Ваш комментарий" text={message} onChangeInput={this.onChangeInput('message')}/>
					<input type="submit" value="Оставить комментарий"/>
				</form>
			</div>
		);
	}
}

export default Form;
