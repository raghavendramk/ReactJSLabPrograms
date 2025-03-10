import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react";
import {data} from './data';

  // let title="microdegree";
  // function handleClick(){
  //   console.log('manikantha')
  //   title="Manikantha";
  // }
  // console.log(useState("hello World"));
  // const value=useState(1)[0];
  // const handler=useState(1)[1];
  // console.log(value);
//   const [text,SetText]=useState('MicroDegree');
//   function handleClick(){
//     if(text=='MicroDegree'){
//       SetText('Manikantha')
//     }
//     else{
//       SetText("MicroDegree");
//     }
    
//   }
//   return (
//     <>
//     <h1>{text}</h1>
//     {/* <h2>{title}</h2> */}

    
//   {/* <button type='button' onClick={handleClick}>Chabge title</button> */}
//     <button type='button' onClick={handleClick}>Title</button>
//     </>
//   );
// }
// //to use state in react we use use state concept
// //use stare
// //Use Effect
// //useState is a function writtenn by react team it returns an arrywith 2values 1-->ud 2-->function
// const [teams,setTeam]=useState(data);
// function clearTeam(){
//   setTeam([]);
// }
// return (
// <>
// {teams.map((team)=>{
// return(
//   <div key={team.id}>
//     <h4>{team.name}</h4>
//   </div>
// )
// console.log(team)
// })}
// <button onClick={clearTeam}>clearTeam</button>
// </>
// );
// }


//by deafult runs every re-renders
//clenup function
//second Parameterr

// function App(){
//   const[count,setCount]=useState(0);
// useEffect(()=>{
//   if(count>0)
//     console.log("call use eefect")
// },[count]);
// useEffect(()=>{
//   console.log("hello");
// })
// function increaseValue(){
// setCount(count+1);
// }
// return(
// <>
// <h2>{count}</h2>
// <button onClick={increaseValue}>clickme</button>
// </>
// );
// }
const url="https://api.github.com/users";
function App(){

  const [gusers,setGusers]=useState([]);
 async function getData(){
  
   const responce= await fetch(url);
   
   const users=await responce.json();
   setGusers(users);
  
   //console.log(users);
  }
  useEffect(()=>{
    getData();
  },[]);
  return (
     <>
  {gusers.map((guser)=>{
    return 
    <li>{guser.login}</li>;
  })}
  </>
  );
}
export default App;
