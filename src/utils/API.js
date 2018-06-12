import axios from "axios"
const BASEURL = "http://localhost:8080/post"
const api = ``


  export let createUser = (query) =>{
    console.log('create User function')
    
    return axios.post(BASEURL, query)
  }

  export let login = (query) =>{
    console.log('login function')
    return axios.post("http://localhost:8080/request", query)
  }

  export const getAllDoors = () => {
    console.log('getAllDoors function')
   return axios.get( api ) 

  }

  export const getDoor = () => {
  const doorId = this.props.match.params.doorId
  console.log('grab individual door function')
  return axios.get(api + "/"+ doorId )
  }
