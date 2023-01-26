import TodoItem from "../components/TodoItem";
import useFetch from "../hooks/useFetch";

export default function TodoList(){
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=20';

    const [loading, items] = useFetch(url);
    if (loading){
        return "Chargment en cours"
    }
    return (
        <ul>
            {items.map((data)=><TodoItem key={data.id} todo={data}/>)}
        </ul>
    )
}