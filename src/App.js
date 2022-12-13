
import React from "react";

export default function App() {
  return (
    <div>
    <div><b>Full Name</b><input></input></div>
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

