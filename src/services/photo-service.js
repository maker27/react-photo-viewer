import axios from 'axios';

export default class PhotoService{

	getAll(){
		return axios.get('https://boiling-refuge-66454.herokuapp.com/images');
	}

	getPhoto(id){
		return axios.get('https://boiling-refuge-66454.herokuapp.com/images/'+id);
	}

	addComment(id, name, comment){
		return axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${ id }/comments`,
			{ id, name, comment });
	}

}