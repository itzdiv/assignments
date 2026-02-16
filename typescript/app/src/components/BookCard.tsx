import type { NoteType } from '../types'


const BookCard = ({title,description,favourite=false }
:NoteType
) => {
  return (<>
    <div style={{display:'flex', flexWrap:'wrap',border:'1px solid black',padding:'10px',margin:'10px', flexDirection:'column'}}>
    <h1>{title}</h1>{favourite?"🫣":""}
    <p>{description}</p>
    </div>
    </>
  )
}

export default BookCard