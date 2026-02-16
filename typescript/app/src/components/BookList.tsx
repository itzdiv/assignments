import type { NoteType } from '../types'
import BookCard from './BookCard';

interface BookListProps {
  item: NoteType[];
}

const BookList = ({item}: BookListProps) => {
  return (
    <>
    {item.map((data) =>(
    <BookCard title={data.title} description={data.description} favourite={data.favourite}/>
    ))}
    </>
  )
}

export default BookList