import { ChevronRight, Trash2} from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {

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

                    <button className={`bg-blue-500 hover:bg-blue-600 p-2 m-3 rounded-md text-white ${tasks.isCompleted && 'bg-green-600 hover:bg-green-700 transition delay-50'}`}><ChevronRight/></button>
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