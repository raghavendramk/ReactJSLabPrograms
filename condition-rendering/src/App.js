//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function App() {
//   const [loading,setLoading]=useState(false);

//   if(loading){//it it is true this will run
//    return (
// <h1>Hello sie</h1>
//    );
//   }
 
//    return ( // it is false this will run
//    <>
//    <h1>hello mava</h1>
   
//    </>
// );
// }

function App()
{

  //short circut evaluvation
//   const [text,setText]=useState("mm");
//   const firstValue=text || 'hello woprld';//or
//   const secondValue=text && 'hello world';//and

//   return(
// <>
// <h1>{firstValue}</h1>
// <h2>value:{secondValue}</h2>
// </>
//   );

//ternary operation
//{something ? true : false }
//if(someonething){
//true
//}else{
//false
//}

const [text,setText]=useState("ok ok");
const [showModel,setshowModel]=useState(false);//show ND HIDE
function handleClick(){
  // setText(!text)
  setshowModel(!showModel)
}
return <>
  {text ? <h1>very good</h1> : <h2>Very bad</h2>}
  <button onClick={handleClick}>click me</button>
  {showModel && <h1>my model is here guys!!</h1>}
  </>
}

export default App;
