async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
}

const TodosPage = async () => {
  const todos = await getAllTodos();
  return (
    <div>
      <h1 className="text-4xl text-black font-bold shadow-md flex justify-center">
        TODOS
      </h1>
      <div className="w-full grid grid-cols-3 gap-4 mt-5 place-content-center">
        {todos &&
          Array.isArray(todos) &&
          todos.map((todo: any) => (
            <div
              className="text-black border p-5 shadow-lg rounded-lg"
              key={todo.id}
            >
              <h4>Title: {todo.title}</h4>
              <p>UserId: {todo.userId}</p>
              <h4>Title: {todo.title}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodosPage;
