import axios from 'axios'

 const axiosBase = axios.create({
   baseURL: "https://evangadi-forum-backend-1-mlsi.onrender.com/api",
  //  baseURL: 'http://localhost:5500/api',
 });
 export default axiosBase