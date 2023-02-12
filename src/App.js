import logo from './logo.svg';
import './App.css';
import React from 'react';
import Post from "./Components/Post/Post";

function App() {
  let [name, setName] = React.useState("Rady");
  let [refresh, setRefresh] = React.useState(true);
  console.log("App Function");

  // runs once refresh changes
  React.useEffect(function(){
    // geeb data men el server
    setName("Test");
  }, [refresh]);

  // runs once at the first component render
  React.useEffect(function(){
    // geeb data men el server
    setName("Ehab");
  }, []);

  let post = ["Islam", "Ehab", "Manuel", "Rady"];

  return (
    <>
      <h1>Hello World!</h1>
      <h2 className="app_name">{name}</h2>
      <button onClick={() => {
        setRefresh(!refresh);
      }}>Change Name</button>
      {post.map((element, idx) => {
        return(<Post key={idx} name={element} />);
      })}
    </>
  );
}

export default App;
