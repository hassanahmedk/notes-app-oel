import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";
import "./styles/main.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

let idCounter=3;
function App() {
  const [currentScreen, setCurrentScreen] = useState("current");

  const [list, setList] = useState([
    { id: 1, name: "To do Item-1", tag: "Home", completed: false },
    { id: 2, name: "To do Item-2", tag: "Work", completed: false },
    { id: 3, name: "To do Item-3", tag: "Study", completed: false },
  ]);

  const deleteItem = (id) => {
    console.log(id);
    let newList = list.filter((item)=> item.id!=id);
    console.log(newList);
    setList([...newList]);
  };
  const updateList = (item) => {
    idCounter++;
    let newItem={
      ...item, 
      id:idCounter,
      completed:false
    }
    setList([...list, newItem]);
  };

  const updateTask = (name, id)=>{
    list.forEach((item) => {
      if (item.id == id) {
        item.name = name;
      }
    });

    setList([...list]);
  }

  const changeStatus = (id, checked) => {
    console.log(list);

    list.forEach((item) => {
      if (item.id == id) {
        item.completed = checked;
      }
    });

    setList([...list]);
  };

  return (
    <div className="App">
      <div className="heading">To-Do List App</div>
      <Input updateList={updateList} />
      <div className="nav">
        <AssignmentIcon
  
            sx={{
              fontSize:"2rem",
              cursor:"pointer",
              color:currentScreen==="finished" ? "rgba(240,240,240,0.45)" : "#FEAE02"
            }}
          onClick={() => {
            setCurrentScreen("current");
          }}
        />
        <CheckCircleIcon
          sx={{
            cursor:"pointer",
            fontSize:"2rem",
            color:currentScreen==="current" ? "rgba(240,240,240,0.45)" : "#FEAE02"
          }}
          onClick={() => {
            setCurrentScreen("finished");
          }}
        />
      </div>
      <List
      updateTask={updateTask}
      deleteItem={deleteItem}
        list={list}
        changeStatus={changeStatus}
        currentScreen={currentScreen}
      />
    </div>
  );
}

export default App;
