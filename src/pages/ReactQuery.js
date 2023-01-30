import { useState } from "react";
import { useQuery } from "react-query";
import { loadPosts } from "../services/loadPosts";

export default function ReactQuery(){

    const [page, setPage] = useState(1);
    const queryKey = ['posts'];
    const {isLoading, data, error} = useQuery(queryKey, () => loadPosts(1))
    
    //const datas =[];
    const posts = data || [];

    const handleTitleUpdate = async (post, value) =>{

    }

    return (<>
    <ul>
        {posts.map((d)=>(<li>{d.title}</li>))}
    </ul>
    </>)
}