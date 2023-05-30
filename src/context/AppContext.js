import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext();

 export default function AppContextProvider({children}){
  const [loading ,setLoading] = useState(false);
  const [posts ,setPosts] = useState([]);
  const [page,setPage] = useState(1);
  const [totalPage , setTotalPage] = useState(null);

  async function fetchData(page){
    setLoading(true);
    const url = `${baseUrl}?page=${page}`;
    try{
          const out = await fetch(url);
          const data = await out.json();
          
          setPage(data.page);
          setPosts(data.posts);
          setTotalPage(data.totalPages);
    }
    catch(error){
            console.log("Error in Fetching data");
            setPage(1);
            setPosts([]);
            setTotalPage(null);
    }
    setLoading(false);
  }

  function pageHnadle(page){
    setPage(page);
    fetchData(page);
  }
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchData,
    pageHnadle
  };
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>

}

