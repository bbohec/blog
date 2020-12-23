export function getPosts() {
  return () => {
  	type: 'GET_POSTS',
  	payload: axios.get("http://rest.learncode.academy/api/reacttest/tweets")
  }
}