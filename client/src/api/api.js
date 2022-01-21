import axios from 'axios';

let myURL = 'http://localhost:8080/api'; //development

if (process.env.NODE_ENV === 'production') {
    myURL = 'api';
}
export default axios.create({
  baseURL: myURL,
});