import axios from 'axios';

export const API = {
  async getComments(limit = 20) {
    try {
      const response = await axios.get(`http://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
      return await response.data
    }
    catch (e) {
      alert(e)
    }
  },
  async postComment(comment) {
    try {
      const response = await axios.post('https://test.steps.me/test/testAssignComment', { comment })
      return await response.data
    }
    catch (e) {
      alert(e)
    }
  }
}