import { createContext,useContext } from "react";

export const TodoContext= createContext({
    todos:[
        {  // these are default value so that the structure is defined They just get used if the provider is empty 
            id:1,
            todo:"Todo message",
            completed:false,

        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete:(id) =>{}

}
)

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider



