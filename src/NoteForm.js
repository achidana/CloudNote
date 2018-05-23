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


const NoteForm= ({currentNote}) => {
  
    return(
      <div className="NoteForm">
          <div className="form-actions">
            <button type="button">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder={currentNote.title}
              />
            </p>
            
            <textarea name="body" value={currentNote.body}></textarea>
          </form>
        </div>
    )
  }


export default NoteForm