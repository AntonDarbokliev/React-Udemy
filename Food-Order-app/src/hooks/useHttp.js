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
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);

  const sendRequest = useCallback(async function sendRequest(data) {
    setLoading(true);
    try {
      const resData = await sendHttpRequest(url,{...config,body:JSON.stringify(data)});
      setData(resData);
    } catch (error) {
      setErrors(error.message || "Something went wrong");
    }
    setLoading(false);
  },[url,config])

  function clearData() {
    setData(initialValue)
  }

  useEffect(() => {
    if(config &&  (config.method === 'GET' || !config.method) || !config){
        sendRequest()
    }
  },[sendRequest])

  return {
    data,
    loading,
    errors,
    sendRequest,
    clearData
  };
}
