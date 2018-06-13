import axios from "axios"
const BASEURL = "http://localhost:8080/post"
const baseApi = `http://localhost:8090/`


  export let createUser = (query) =>{
    console.log('create User function')
    
    return axios.post(BASEURL, query)
  }

  export let login = (query) =>{
    console.log('login function')
    return axios.post("http://localhost:8080/request", query)
  }

  export const getAllDoors = () => {
   return axios.get( baseApi + "door" ) 
  }

  export const getDoor = (doorId) => {
  console.log('grab individual door function')
  return axios.get(baseApi + "/door/"+ doorId )
  }
