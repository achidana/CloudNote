import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'




class Main extends React.Component{

constructor(props)
{
    super(props)
    // this.state = {
    //     value: {
    //         title: '',
    //         body: ''
    //     }
    // }

    this.state = {
        arr: this.blankNote()
    }
}

    
    populateForm = (data) => {
        // let temp= Object.assign({}, this.state.arr)
        // temp.title=data.title
        // temp.body=data.body
    
        // this.setState(
        //     {
        //         arr:temp
        //     }
        // )

        // this.setState(
        //     {
        //         arr:{title:data.title , body:data.body}
        //     }
        // )
        this.setState({arr:data})
    }

    blankNote = () => {
        return(
             {
            title:"Title your note",
            body: ''
            }
        )
    }

    resetNote = ()=>{
        return(
            this.populateForm(this.blankNote())
        )
    }


    render(){
        return(
            <div className="Main">
            <Sidebar resetNote={this.resetNote} />
            <NoteList populateForm = {this.populateForm} />
            <NoteForm data = {this.state.arr}  />
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