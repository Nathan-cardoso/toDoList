import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

function TaskPage(){
    const navegate = useNavigate()
    // O hook SearchParams permite acessar os parâmetros da URL
    // Neste caso, estamos pegando os parâmetros "title" e "description"
    const [ searchParams ] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    // Renderiza a página com o título e descrição obtidos dos parâmetros

    return(
        <div className="h-screen w-screen bg-[#f0f0f0]">

            <h1 className="font-bold text-4xl text-center p-4">Detalhes da Tarefa</h1>

            <div className="text-center flex flex-col items-center justify-center">
                <div className="bg-gray-50 w-[400px] h-[400px] rounded-2xl shadow-lg flex flex-col">

                    <h2 className="font-bold text-3xl my-2 p-2 text-center">{title}</h2>

                    <div className="flex flex-1 items-center justify-center">
                        <p className="text-lg font-light text-center">{description}</p>
                    </div>

                </div>
            </div>

            <div className="flex justify-center">
                <button 
                    onClick={() => navegate("/")}
                    className="bg-blue-500 rounded-2xl p-3 m-4  font-bold text-white cursor-pointer hover:bg-blue-600 flex"
                    >
                        < ChevronLeft size={30}  />
                        Voltar
                </button>
            </div>
        </div>

    )
}

export default TaskPage;    