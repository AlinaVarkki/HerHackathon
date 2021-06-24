import {create} from "apisauce";

const apiClient = create({
    // baseURL: 'https://devweb2020.cis.strath.ac.uk/kwb18179-nodejs/'

    //MUST USE GENERAL
    baseURL: 'http://10.0.2.2:3001'
})

export default apiClient;
