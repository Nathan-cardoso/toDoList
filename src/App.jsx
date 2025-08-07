import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App(){
  const [tasks, setTasks] = useState([
    {
      id:1,
      title:"Estudar React",
      description: "Estudar o framework React do zero",
      isCompleted:false
    },
    
    {
      id:2,
      title:"Estudar Node",
      description: "Estudar o nodeJs no Back-end",
      isCompleted:false
    }
  ]);

  function onTaskClick(id){ // Função para atualizar a tarefa para completa ou incompleta

    const newTasks = tasks.map(task => { // Declaro um novo array na qual pego a lista de tarefas
      if(task.id === id){ // verifico se o id da tarefa iterada pelo map é igual ao id que foi passado na função
        return {...task, isCompleted: !task.isCompleted} // Se for igual, retorno o valor contrário do isCompleted.
      }

      return task; // Se não for igual, retorno a própria tarefa sem alterações.
    })

    setTasks(newTasks) // Por fim, atualizo o estado com a nova lista de tarefas para a tela ser renderiazada novamente.
  }

  function onDeleteTask(id){
    const newArrayTask = tasks.filter( (task) => task.id !== id)

    setTasks(newArrayTask)
  }

  function onAddTask(title, description){
    const newTask = {
      id:tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }

  return(
    <div className="w-screen h-screen bg-[#f0f0f0] flex justify-center p-6">
      <div className="w-[500px] space-y-5">
        <h1 className="font-bold text-2xl text-black text-center py-4">Gerenciador de Tarefas</h1>
        < AddTask onAddTask={onAddTask}/>
        < Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask} />
      </div>
    </div>
  )
}

export default App;