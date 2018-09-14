import {WEBSERVICES } from '../config'
export const doLogin = (data) => {
    return fetch(`${WEBSERVICES.API}/login`,{
        method:'post',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    .then((res) => res.json())
    .catch((err)=>res.json())
}


export const getCategory = () => {
     return fetch(`${WEBSERVICES.API}/get-category`,{
        method:'get',

        
    })
    .then((res) => res.json())
    .catch((err)=>res.json())
}


export const getPost = (data) => {
    return fetch(`${WEBSERVICES.API}/search`,{
        method:'post',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    .then((res) => res.json())
    .catch((err)=>res.json())
}