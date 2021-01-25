import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addname,
  decrement,
  deletename,
  increment,
  updatename,
} from "./Actions/Actions";

function App() {
  const counter = useSelector((e) => e.CounterReducer);
  const name = useSelector((e) => e.NamesReducer.names);
  const dispatch = useDispatch();
  const [name12, setname12] = useState("");
  const [edit, setedit] = useState("");
  const [idholder, setidholder] = useState(0);
  const [modal, setmodal] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addname({ name12, id: Math.random() }));
    console.log(name);
  };

  const handleedit = (e) => {
    e.preventDefault();
    dispatch(updatename({ idholder, edit }));
  };
  const openmoda = (id) => {
    setidholder(id);
    setmodal(true);
  };

  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const posts = name.slice(indexoffirst, indexoflast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(name.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div className="App">
      {counter}
      <button
        onClick={() => {
          dispatch(increment());
        }}>
        ADD
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        SUbtract
      </button>
      <form action="submit" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name12}
          onChange={(e) => {
            setname12(e.target.value);
          }}
        />
      </form>
      {modal && (
        <form action="submit" onSubmit={handleedit}>
          <input
            type="text"
            value={edit}
            onChange={(e) => {
              setedit(e.target.value);
            }}
          />
        </form>
      )}
      {posts.map((e) => (
        <div key={e.id}>
          {e.name12}
          <button
            onClick={() => {
              dispatch(deletename(e.id));
            }}>
            delet
          </button>

          <button
            onClick={() => {
              openmoda(e.id);
            }}>
            edit
          </button>
        </div>
      ))}
      {pagenum.map((e) => (
        <div
          key={e}
          onClick={() => {
            setcurrentpage(e);
          }}>
          {e}
        </div>
      ))}
    </div>
  );
}

export default App;
