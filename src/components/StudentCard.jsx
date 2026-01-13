const StudentCard = ({ Theme, name, rollNum, batch, Language }) => {
  const isDark = Theme === "dark";
  return (
    <>
      <div
        className={` dark:bg-stone-900 dark:text-white p-5 border w-4xl rounded text-center bg-white text-black  max-w-sm`}
      >
        <div className="text-sm mt-5">
          <a
            href="#"
            className="font-medium leading-none  transition duration-500 ease-in-out"
          >
            {name}
          </a>
          <p className=" ">Rollnum: {rollNum}</p>
          <p className="">Batch: {batch}</p>
        </div>

        <p className="mt-2 text-sm ">My Fav Language is {Language}</p>

        <div className="flex mt-4 justify-center"></div>
      </div>
    </>
  );
};

export default StudentCard;
