import CounterCard from "./components/UI/CounterCard";
import Joke from "./components/UI/Joke";
import ProductCard from "./components/UI/ProductCard.jsx";
import SignupForm from "./components/UI/SignupForm";
import Student from "./components/UI/Student";
import TodoCard from "./components/UI/TodoCard.jsx";
import { SetTheme } from "./context/ThemeContext.jsx";

const App = () => {
  const { Theme, switchTheme } = SetTheme();
  console.log(Theme);

  return (
    <>
      <div className="bg-white text-black dark:text-white dark:bg-slate-950 min-h-screen max-w-screen">
        <div className="flex justify-end align-middle items-center">
          <label className="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
            <span className="absolute inset-[0.1em] rounded-full border border-[hsl(0,0%,25%)]"></span>
            <div className="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
              <div className="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]"></div>
            </div>
            <div className="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]"></div>
            <input
              className="peer h-[1em] w-[1em] opacity-0"
              id=""
              name=""
              type="checkbox"
              onChange={() => switchTheme()}
            />
            <span className="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
              <span className="relative h-full w-full rounded-full">
                <span className="absolute inset-[0.1em] rounded-full border border-[hsl(0,0%,50%)]"></span>
              </span>
            </span>
          </label>
        </div>
        <Student />
        <CounterCard />
        <SignupForm />
        <Joke />
        <div className="max-w-6xl  m-auto mt-3">
          <ProductCard />
        </div>
        <div className="max-w-6xl  m-auto mt-12">
          <TodoCard />
        </div>
      </div>
    </>
  );
};

export default App;
