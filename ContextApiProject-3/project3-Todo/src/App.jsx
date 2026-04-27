import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/index";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    // settodos(todo)  this will remove all the old todos and keep just one todo
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    settodos((prev) =>
    //   prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    // );
     // this matches the id of the previous todo and update it if the id matches else keep the previous todo as it is

     // Better approach is : 
    prev.map((prevTodo) =>
  prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo
))
// why better above was replacing the whole object → might lose properties like id

    // Above is same as below
    // prev.map((eachval) =>{
    //     if(eachval.id === id){
    //         todo
    //     }
    //     else{
    //         prevtodo
    //     }
    // })
  };

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id)); // this filter the id that matches ie deltes the give id todo
  };
  const toggleComplete = (id) => {
    settodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  // Local storage setting and getting 

  useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      
      if (storedTodos && storedTodos.length > 0) {
          settodos(storedTodos);
        }
    }, []);
    //   const [todos, settodos] = useState(() => {
    //   const storedTodos = localStorage.getItem("todos");
    //   return storedTodos ? JSON.parse(storedTodos) : [];
    // });
    // This is more efficent way as no two use effect is needed 
    
useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">{/* Todo form goes here */}<TodoForm/></div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) =>(
                <div key={todo.id}
                    className='w-full'
                >
                    <TodoItem todo={todo}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
