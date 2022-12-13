import React, {useState, useEffect} from "react";

export default function App() {

  const[input, setInput]=useState("");
  const[list, setList]=useState([]);

  const handleChange=(e)=>{
    setInput(e.target.value)
    console.log("aaa")
  };

  const handleClick=()=>{
    setList([...list, input])
    setInput("")
    console.log("ooo")
  }

  return (
    <div>
    <div><b>Full Name</b><input value={input} onChange={handleChange}></input></div>
    <div><b>Email</b><input></input></div>
    <div><b>Password</b><input></input></div>
      <b>Occupations</b>
      <select>
        <option>--Choose Occupations--</option>
        <option>
          <MyComponent />
        </option>
      </select>
      <div><b>State</b><select><option>--Choose State--</option></select></div>
      <div><button onClick={handleClick}>Submit</button>
      {list.map((list)=>{
        return <li>{list}</li>
      })}
      </div>
    </div>
  );
}

function MyComponent() {
  const [data, setData] = React.useState([]);

 

  React.useEffect(() => {
    fetch("https://frontend-take-home.fetchrewards.com/form")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  

  return (
    <ul>
      {data.occupations}
      
    </ul>
  );
}

