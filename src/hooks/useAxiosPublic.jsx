import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://foodi-backend-m1h2.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
