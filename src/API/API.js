import axios from 'axios';

export const API = {
  getComments(page = 5, limit = 20) {
    return axios.get(`http://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`)

  },
  async postComment(comment) {
    try {
      const response = await axios.post('https://test.steps.me/test/testAssignComment', { comment })
      return response.data
    }
    catch (e) {
      console.log(e)
    }
  }
}