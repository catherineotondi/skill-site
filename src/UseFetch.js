import { useEffect,useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cleanUp = new AbortController();
        fetch(url, { signal: cleanUp.signal })
            .then(resp => {
                if (!resp.ok) {
                throw Error("Unable to fetch data")
            }
            return resp.json()
        })
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("fetch aborted")
                } else {
                    setIsLoading(false)
                    setError(err.message)
                }
              
            })
        
        return () => cleanUp.abort();


    }, [url])
    return{data,isLoading,error}
}
 
export default useFetch;