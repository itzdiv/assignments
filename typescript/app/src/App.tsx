import './App.css'
import BookForm from './components/BookForm.tsx'
import BookList from './components/BookList.tsx'
import type { NoteType } from './types.tsx'

function App() {
  
const data : NoteType[] =[{
  title:"Majnu",
  description:"He likes to make chai a lot",
  favourite:false
},
{
  title:"Toys",
  description:"It contains a lot of toys",
},
{
  title:"Zillow",
  description:"Allows you to book flats.",
  favourite:true
},{
  title:"Pokemon",
  description:"COntains a lot of details about pokemon",
  favourite:false
}]
  return (
    <>
    <BookList item={data}></BookList>
    <BookForm onSubmit={(books)=>console.log("Book Name is: "+books.bookName+" Pages:"+books.pages)}></BookForm>
    </>
  )
}

export default App
