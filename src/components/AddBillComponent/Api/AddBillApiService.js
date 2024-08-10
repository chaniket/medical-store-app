import axios from "axios";
import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
//import AppMeta from '../../../AppMeta'
//import { Customer } from "./types";

const ENV_BASE_URL = process.env.REACT_APP_BASE_URL;
//const [BaseUrl,setBaseUrl] = useState("");
function API_URL (){
  let url = useSelector((state) => state.baseUrl);
  console.log("API_URL "+url);
  return url;
};

/* hooks cannot called outside */
//const API_URL = GetBaseUrl(); // Replace with your actual API URL
//const API_URL = useSelector((state) => state.baseUrl);

// Function to get customer data
const GetCustomerData = async () => {
  try {
    const url = API_URL();
    const response = await axios.get(`${url}/customer`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error;
  }
};

// Function to post customer data
const PostCustomerData = async (customerData) => {
  const log = "postCustomerData ";
  debugger;
  const envUrl = process.env.REACT_APP_BASE_URL+"/medicine/saveBill";
 // const url   = API_URL();
  console.log(log+" "+" ENV_BASE_URL "+ENV_BASE_URL);
  try {
    const response = await axios.post(
     envUrl,
      customerData
    );
    debugger;
    return response.data;
  } catch (error) {
    console.error("Error posting customer data:", error);
    throw error;
  }
};
/*
// Function to post customer data
postCustomerData : async (customerData: Customer): Promise<Customer> => {
    debugger;
    try {
        const response = await axios.post<Customer>(`${API_URL}/customer`, customerData);
        return response.data;
    } catch (error) {
        console.error('Error posting customer data:', error);
        throw error;
    }
} */

//export default apiService;
export default PostCustomerData;
export  {  GetCustomerData,};
