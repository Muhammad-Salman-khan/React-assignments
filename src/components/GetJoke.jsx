const GetJoke = ({ joke }) => {
  return (
    <>
      <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
        <div className="relative dark:bg-slate-950 dark:text-white h-full ml-0 mr-0 sm:mr-10">
          <span className="absolute  top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
          <div className="relative h-full p-5 bg-white dark:bg-stone-950 dark:text-white border-2 border-blue-400 rounded-lg">
            <div className="flex items-center -mt-1">
              <h3 className="my-2 ml-3 text-lg font-bold ">Joke by idk</h3>
            </div>
            <p className="mt-3 mb-1 text-xs font-medium  uppercase">
              ------------
            </p>
            <p className="mb-2 ">{joke}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetJoke;
