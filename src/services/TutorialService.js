import http from '../http-common';

const getAll = () => http.get('/tutorials');

const get = (id) => http.get(`/tutorials/${id}`);

const create = (data) => http.post('/tutorials', data);

const update = (id, data) => http.put(`/tutorials/${id}`, data);

const remove = (id) => http.delete(`/tutorials/${id}`);

const removeAll = () => http.delete('/tutorials');

const findByTitle = (title) => http.get(`/tutorials?title=${title}`);

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
