import Axios from 'axios';
const KEY = "Enter Your api key";

export const baseParams= {
		part: 'snippet',
		maxResults : 5,
		key : KEY
};
export default Axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3"
});