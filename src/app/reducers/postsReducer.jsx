let defaultState = {
	posts: [],
	fetching: false,
	fetched: false,
	error: null
}

let postsReducer = (state=defaultState, action) => {
	switch (action.type) {
		case "FETCH_POSTS": {
			return null;
		}
		case "FETCH_POSTS_REJECTED":{
			return null;
		}
		default:
			return state;
	}
}

export default postsReducer