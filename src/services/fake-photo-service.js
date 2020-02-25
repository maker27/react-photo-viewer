export default class FakePhotoService {

	myComments = {};

	asyncCallback(value) {
		return new Promise((resolve) => {
			resolve(value);
		})
	}

	getAll() {
		return this.asyncCallback({data: [
			{"id": 237, "url": "https://picsum.photos/id/237/300/200"},
			{"id": 238, "url": "https://picsum.photos/id/238/300/200"},
			{"id": 239, "url": "https://picsum.photos/id/239/300/200"},
			{"id": 240, "url": "https://picsum.photos/id/240/300/200"},
			{"id": 241, "url": "https://picsum.photos/id/241/300/200"},
			{"id": 242, "url": "https://picsum.photos/id/242/300/200"}
		]});
	}

	getPhoto(id) {
		const baseInfo = {
			"id": id,
			"url": "https://picsum.photos/id/" + id + "/600/400",
			"comments": [{
				"id": 153,
				"text": "Крутая фотка",
				"date": 1578054737927
			}, {
				"id": 154,
				"text": "Крутая фотка",
				"date": 1578054737927
			}, {
				"id": 155,
				"text": "Крутая фотка",
				"date": 1578054737927
			}]
		};
		if(this.myComments[id]){
			baseInfo.comments.push(...this.myComments[id]);
		}
		return this.asyncCallback({data: baseInfo});
	}

	addComment(id, name, message) {
		const {myComments} = this;
		if(!myComments[id]) myComments[id] = [];
		myComments[id].push({
			id: myComments[id].length+1,
			text: message,
			date: Date.now()
		});
		return this.asyncCallback({status: 204});
	}

}