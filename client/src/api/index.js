import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

// Posts API
export const fetchPost = id => API.get(`/posts/${id}`);
export const fetchPosts = page => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = name => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = searchQuery => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = newPost => API.post('/posts', newPost);
export const likePost = id => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = id => API.delete(`/posts/${id}`);

// Users API
export const signIn = formData => API.post('/user/signin', formData);
export const signUp = formData => API.post('/user/signup', formData);

// Purchases API
export const fetchPurchasesByProduct = productId => API.get(`/purchases/${productId}`);
export const createPurchase = purchaseData => API.post('/purchases', purchaseData);

export const fetchPurchasesByAdmin = (adminId) => API.get(`/admin/purchases/${adminId}`);


export const notifySellerPaymentSuccess = (sellerId, purchaseDetails) => API.post(`/notifications/seller/${sellerId}`, purchaseDetails);