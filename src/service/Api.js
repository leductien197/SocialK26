import axios from 'axios';
import {store} from '../../App';

// khởi tạo cho axios, sét timeout sau 1 phút mà k có dữ liệu trả về thì tự động cancle request này
const instance = axios.create({
  baseURL: 'http://social.hungvu.net',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 60000,
});

instance.interceptors.request.use((config) => {
  const {token} = store.getState().auth;
  return {
    ...config,
    headers: {...config.headers, Authorization: `Bearer ${token}`},
  };
});

//param là một object chứa email và password để gửi request lên sever
export const login = (params) => {
  return instance.post('/login', params);
};

export const getAllPost = (params) =>{
  console.log('param', params);
  return instance.get('/get-all-post', {params:params})
}

export function createPost (params){
  return instance.post('/create-post', params)
}

export function getMe(params) {
  return instance.get(`/get-me`, params);
}

export function updatePost(params) {
  return instance.put(`/update-post`, params);
}