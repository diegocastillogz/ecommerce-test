import { useEffect } from "react";
import { get } from "api";

const useGetData = (url, setData) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(url);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
};

export default useGetData;
