import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url,config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Something went wrong");
  }

  return resData;
}

export default function useHttp(url,initialValue,config) {
  const [data, setData] = useState(initialValue);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendRequest = useCallback(async function sendRequest() {
    setLoading(true);

    try {
      const resData = await sendHttpRequest(url,config);
      setData(resData);
    } catch (error) {
        console.log(error);
      setErrors(error.message || "Something went wrong");
    }
    setLoading(false);
  },[url,config])

  useEffect(() => {
    if(config &&  (config.method === 'GET' || !config.method) || !config){
        sendRequest()
    }
  },[sendRequest])

  return {
    data,
    loading,
    errors,
    sendRequest
  };
}
