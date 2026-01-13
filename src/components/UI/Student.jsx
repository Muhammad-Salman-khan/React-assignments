import StudentCard from "../StudentCard"

const Student = () => {
 const studentData = [
    { id: 1,
        name: "Salman",
        rollNum: 1103,
        batch: 18,
        Language: "js"
    }, 
    { id: 2,
        name: "Zain",
        rollNum: 1002,
        batch: 12,
        Language: "React"
    }, 
    { id: 3,
        name: "Moiz",
        rollNum: 2222,
        batch: 10,
        Language: "C++"
    }, 
    { id: 4,
        name: "ALi",
        rollNum: 2020,
        batch: 15,
        Language: "Asembly"
    }, 
    
]
    return (
    <div className="flex justify-center flex-col gap-3 h-screen align-middle items-center">
     {studentData.map((e) => 
         <StudentCard key={e.id} name={e.name} rollNum={e.rollNum} batch={e.batch} Language={e.Language}  Theme="dark"/>
        )}
    </div>
  )
}

export default Student
