function Book(props){
    const clickHandler =()=>{
      alert(props.book.title)
    }
   // console.log(props);
    //const {title,author,age}=props;
   return (
   <>
   <h1>{props.book.title}</h1>
  
   <h3>{props.book.author}</h3>
   <button type='button' onClick={clickHandler}> Click me</button>
   
  
  
   </> 
   );
  }
  export default Book;