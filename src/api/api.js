//import axios from 'axios';
//
//let base = '';
//
//export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
//
//export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };
//
//export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };
//
//export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };
//
//export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };
//
//export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };
//
//export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

//export const getCommerList = params => { return axios.get(`${base}/api/admin/merchant/manage/pageMerchantInfo`, { params: params }); };
export const data = {
    pageMerchantInfo(obj) {
        return $ajax.get('http://localhost:8090/api/admin/merchant/manage/pageMerchantInfo', {params:obj}).then(function(res) {
            return Promise.resolve(res.data);
        })
    },
    add(obj) {
        return $ajax.get('/user/add', {params:obj}).then(function(res) {
            return Promise.resolve(res.data);
        })
    }
}
