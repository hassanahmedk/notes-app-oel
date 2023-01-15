import EditIcon from "@mui/icons-material/Edit";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function List(props) {
  let [inputShown, setInputShown] = useState(false);
  let [editInput, setEditInput] = useState("");

  const handleChange = (event) =>{
    setEditInput(event.target.value);
  } 

  if (props.currentScreen === "current") {
    return (
      <div id="list-section">
        <div className="current">
          <div className="list-heading">Current</div>
          {props.list.map((item) => {
            if (!item.completed) {
              return (
                <div className="item">
                  <div className="name">{item.name}</div>
                  <div className="tag">{item.tag}</div>
                  {/* <EditIcon /> */}
                  <div className="actions">
                    <DoneIcon
                      onClick={(event) => {
                        props.changeStatus(event.target.id, true);
                      }}
                      name=""
                      id={item.id}
                      sx={{
                        cursor: "pointer",
                        fontSize: "1.2rem",
                      }}
                    >
                      Done
                    </DoneIcon>
                    <EditIcon
                      onClick={() => {
                        setInputShown(!inputShown);
                      }}
                      sx={{
                        cursor: "pointer",
                        fontSize: "1.2rem",
                      }}
                    ></EditIcon>
                    <CloseIcon
                      onClick={() => {
                        props.deleteItem(item.id);
                      }}
                      sx={{
                        cursor: "pointer",
                        fontSize: "1.2rem",
                      }}
                    />
                  </div>
                  {inputShown && (
                    <div>
                      <input
                        className="edit-input"
                        type="text"
                        placeholder="Edit Item"
                        value={editInput}
                        onChange={handleChange}
                      />
                      <button onClick={()=>{
                        props.updateTask(editInput, item.id);
                        setInputShown(false);
                      }}>Update</button>
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div id="list-section">
        <div className="finished">
          <div className="list-heading">Finished</div>
          {props.list.map((item) => {
            if (item.completed) {
              return (
                <div className="item">
                  <DoneIcon />
                  <div>{item.name}</div>
                  <div>{item.tag}</div>
                  <div className="actions"></div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default List;
