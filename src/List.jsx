import React, { useState, useEffect } from "react";
import axios from "axios";
import { unstable_batchedUpdates } from "react-dom";
import {useHistory} from 'react-router-dom'

export default function List(props) {
  let history = useHistory();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/contact")
      .then(res => {
        return setList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const del = id => {
    axios.delete("http://localhost:3000/contact/:id", { data: { id } });
  };
  const update = contact =>
  {
      history.push({
        pathname: '/contacts',
        state:{contact, edit:true}
        })
      // let x=props.location.state.contact
    }
    
  

  return (
    <div>
      {list &&
        list.map(el => (
          <div key={el._id}>
            {" "}
            <div>{el.name}</div> <div>{el.phone}</div>
            <div> {el.email}</div>
            <div>
              <button onClick={() => del(el._id)}>sup</button>
              <button onClick={()=> update(el)}>update</button>
            </div>
          </div>
        ))}
    </div>
  );
}
