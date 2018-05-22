import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = () => {
    return(
        <div className="Main">
            <Sidebar />
            <NoteList />
            <NoteForm />
        </div>
    )
}


// class Main extends React.Component{
//     render(){
//         return(
//             <div className="Main">
//                 MAIN!
//                 </div>
//         )
//     }
// }

export default Main