import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {books} from './books';
import Book from './Book';

 const title="adalika kannada";
 const author="rmk";

 


function BookList(){
  return (
    <>
    {books.map((book)=>{
    return (
      <Book  book={book}/>  
    )
    })}
   
    </>
    
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
