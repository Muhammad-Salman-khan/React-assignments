const TodoList = ({ tasks, line, Del, SetValue, Add, ToggleTask, value }) => {
  return (
    <>
      <div className="bg-white dark:text-white  dark:bg-stone-900 shadow-2xl rounded-2xl w-full max-w-full p-6">
        <h1 className="text-2xl font-bold text-center mb-4">📝 To-Do List</h1>
        {tasks.map((e) => {
          <p>{e.comp}</p>;
        })}
        <div className="flex mb-4">
          <input
            type="text"
            id="taskInput"
            required
            value={value}
            onChange={(e) => SetValue(e.target.value)}
            placeholder="Enter a task"
            className="grow p-2 rounded-l-md border border-gray-300 focus:outline-none"
          />
          <button
            onClick={Add}
            className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600"
          >
            Add
          </button>
        </div>

        <ul id="taskList" className="space-y-2">
          {tasks.map((e) => (
            <li
              key={e.id}
              onClick={() => ToggleTask(e.id)}
              className={`group ${
                e.comp ? "line-through" : ""
              }  flex items-center justify-between gap-3 px-4 py-3 rounded-xl 
  bg-white dark:bg-slate-900
  border border-slate-200 dark:border-slate-800
  hover:border-slate-300 dark:hover:border-slate-700
  transition`}
            >
              {/* Task */}
              <span
                className={`${
                  line ? "line-through" : ""
                } text-slate-800  dark:text-slate-100 text-sm font-medium truncate`}
              >
                {e.task}
              </span>

              {/* Delete */}
              <button
                onClick={() => Del(e.id)}
                className="transition
    flex items-center justify-center h-8 w-8 rounded-lg
    bg-red-500/10 hover:bg-red-500/20
    text-red-500 dark:text-red-400
    hover:text-red-600 dark:hover:text-red-300"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
