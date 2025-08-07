import { useState } from "react";

function AddTask({ onAddTask }){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return(

        <div className="space-y-2 p-6  bg-gray-50 rounded-md shadow-md flex flex-col gap-2">
            <input type="text" placeholder="Digite o título" className="text-gray-600 bg-gray-100 rounded-md p-2" value={title} onChange={(event) => setTitle(event.target.value)}></input>
            <input type="text" placeholder="Digite a descrição" className="text-gray-600 bg-gray-100 rounded-md p-2" value={description} onChange={(event) => setDescription(event.target.value)}></input>

            <button className="bg-blue-500 rounded-2xl p-2 text-center font-bold text-white cursor-pointer hover:bg-blue-600"
                    onClick={() => {
                        if(!title.trim() || !description.trim()){
                            return alert("Você não adicionou nenhuma tarefa")
                        }
                        onAddTask(title, description)
                        setTitle('')
                        setDescription('')
                    }}>
                     Adicionar tarefa
            </button>
        </div>
    )
}

export default AddTask;