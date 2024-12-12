import { useState , useEffect} from 'react';
import axios from 'axios';

const rapidApiKey = process.env.RAPID_API_KEY;

export const useFetch = (endpoint:string, query:Record<string, string|number>) => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query
        },
        headers: {
          'x-rapidapi-key': '46095e084cmsh2e365139bf04295p114963jsn1a586671390e',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async ()=>{
        setIsLoading(true);
        try{
            const responses = await axios.request(options);
            setData(responses.data.data);
            setIsLoading(false);
        }catch(error){
            setError(error);
            alert('There is an error');
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    const refetch = () => {
        fetchData();
    }

    return {
        data, isLoading, error, refetch
    }
}