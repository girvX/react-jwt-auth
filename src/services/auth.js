import axios from 'axios';

export const isauthenticate = () => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
        return {auth: false};
    }
    return axios.get('http://localhost:3001/isauth', {headers: { Authorization: `Bearer ${token}` }} )
        .then(res => (res.data));
};