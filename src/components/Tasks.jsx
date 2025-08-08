import { ChevronRight, Trash2} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {

    const navegation = useNavigate();
    // Função para navegar para a página de detalhes da tarefa

    function onSeeDetails(tasks){
        const query = new URLSearchParams();
        query.set("title", tasks.title);
        query.set("description", tasks.description);
        // Navega para a página de detalhes da tarefa com os parâmetros de consulta
        // Isso permite que a página de detalhes acesse esses parâmetros através do hook useSearchParams

        navegation(`/task?${query.toString()}`);
    }


    return( 
        <ul className="space-y-2 bg-gray-50 rounded-md shadow-md">
            {tasks.map(tasks => (
                <li key={tasks.id} className="flex">
                    <button className={`w-full bg-blue-500 hover:bg-blue-600 p-2 m-3 rounded text-left font-bold text-white flex cursor-pointer ${tasks.isCompleted && ' bg-green-600 hover:bg-green-700 line-through transition delay-50'}`} // Eh possível usar o JS no className
                        onClick={() => {
                        // Quando temos uma props que é uma função e que tem parâmetros, devemos passar uma arrow function para chamar a função com o parâmetro.
                        // Assim, quando o botão for clicado, a função onTaskClick será chamada
                        onTaskClick(tasks.id)
                    }}>
                        {tasks.title}
                    </button>

                    <button className={`bg-blue-500 hover:bg-blue-600 p-2 m-3 rounded-md text-white ${tasks.isCompleted && 'bg-green-600 hover:bg-green-700 transition delay-50'}`}
                            onClick={ () => onSeeDetails(tasks)}>
                        <ChevronRight/>
                    </button>
                    <button className="bg-red-600 p-2 m-3 rounded-md text-white cursor-pointer hover:bg-red-700 hover:transition delay-100 "
                            onClick={() => {onDeleteTask(tasks.id)}}>
                        <Trash2/>
                    </button>
                </li>   
            ))}
        </ul>
    )
}

export default Tasks;