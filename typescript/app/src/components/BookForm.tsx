import React, { useState } from 'react'
interface BookFormProps{
    onSubmit(books:{bookName:string,pages:number}):void
}
const BookForm = ({onSubmit}:BookFormProps) => {

    const [bookName,setBookName] =useState<string>("");
    const [pages,setPages]=useState<number>(0);

   

    function submitHandler(e:React.SubmitEvent<HTMLFormElement>):void{
        e.preventDefault();
        onSubmit({bookName,pages});
    }
  return (
    <>
    <form onSubmit={submitHandler}>
        <input value={bookName} placeholder='Enter bookname' type='text' required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setBookName(e.target.value);
        }}></input><br></br>
        <input value={pages} placeholder='Enter Pages' type='number' required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setPages(Number(e.target.value));
        }}></input>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default BookForm