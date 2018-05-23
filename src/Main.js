import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'




class Main extends React.Component{

    
    populateForm(data){
        console.log(data)
    }


    render(){
        return(
            <div className="Main">
            <Sidebar />
            <NoteList data = {this.populateForm} />
            <NoteForm />
            </div>
        )
    }
}

// const style ={
// display: 'flex',
// height: '100vh',
// alignItems: 'strech'

// }

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