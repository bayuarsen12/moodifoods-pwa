import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_ENDPOINT ||
    "https://moodifoods-be-v1.herokuapp.com",
});

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // if (window.confirm('Terjadi kesalahan, silahkan muat ulang')) {
    //   window.location.reload();
    // }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
