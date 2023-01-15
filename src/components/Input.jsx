import { useState } from "react"



function Input(props) {

    const [item, setItem] = useState({
        name:"",
        tag:""
    });

    const updateItem = (event) => {
        let {name, value} = event.target;
        setItem({...item, [name]:value})
    }


  return (
    <div id="input-section">
        <input onChange={updateItem} placeholder="To Do Item" name="name" value={item.name} type="text" />
        <input onChange={updateItem} placeholder="Tag" name="tag" value={item.tag} type="text" />
        <button className="input-button" onClick={() => {
            if(item.name!=="" && item.tag!== ""){
                props.updateList({...item})
                setItem({
                    name:"",
                    tag:"" })
            }

        }}>
            Add Note
        </button>
    </div>
  )
}

export default Input;