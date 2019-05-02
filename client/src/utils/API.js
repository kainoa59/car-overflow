import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },
  addNewQuestion: (title, body) => {
    return axios.post('/api/add', {title: title, body: body});
  },
  displayQuestions: (title, body) => {
    return axios.get('/api/add', {title: title, body: body});
  },
  displayOneQuestion: (id) => {
    return axios.get('/api/add/' + id);
  },
  addNewReply: (id, reply) => {
    return axios.post('/api/reply/' + id, {reply: reply})
  }
};
