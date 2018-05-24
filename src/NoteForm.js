import React from 'react'
// import './NoteForm.css'

// const NoteForm = () => {
//     return(
//         <div className="NoteForm">
//           <div className="form-actions">
//             <button type="button">
//               <i className="fa fa-trash-o"></i>
//             </button>
//           </div>
//           <form>
//             <p>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Title your note"
//               />
//             </p>

//             <textarea name="body"></textarea>
//           </form>
//         </div>

//     )
// }




const NoteForm = ({ currentNote ,saveNote ,deleteNote}) => {

  const handleChanges = (ev)=>{
    const temp = {...currentNote}
    temp[ev.target.name]=ev.target.value
    saveNote(temp)
       
  }

  

  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button" onClick={() => deleteNote(currentNote)}>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title Your Note"
            value={currentNote.title}
            onChange={(ev)=>handleChanges(ev)}
          />
        </p>

        <textarea name="body" value={currentNote.body} onChange={(ev)=>handleChanges(ev)} ></textarea>
      </form>
    </div>
  )
}


export default NoteForm