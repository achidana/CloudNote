import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import base from './rebase'


let counter=0;


class Main extends React.Component {
    

    constructor(props) {
        super(props)
       

        this.state = {
            //arr: this.blankNote()
            // arr: JSON.parse(localStorage.getItem('array')),
            arr:[],

            currentNote: this.blankNote()
        }
    }

    componentWillMount(){
        //console.log(this.state.arr)
        base.syncState('arr',{
            context:this,
            state: 'arr',
            asArray: true
        })
    }

    saveNote = (note) =>{
        const tempArr = [...this.state.arr]
        const index= tempArr.findIndex(x => note.id === x.id)
        if(index === -1)
        {
            note.id=counter++
            tempArr.push(note)
            
        }
        else{
            tempArr[index]=note
        }

        this.setState({arr:tempArr})
        this.setState({currentNote:note})
        //localStorage.setItem('array', JSON.stringify(this.state.arr));

    }


    setCurrentNote = (data) => {
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
        //this.setState({arr:data})


        //console.log(data)
        this.setState({ currentNote: data })
    }

    blankNote = () => {
        return (
            {
                title: '',
                body: ''
            }
        )
    }

    resetNote = () => {
        return (
            this.setCurrentNote(this.blankNote())
        )
    }

    deleteNote = (currentNote)=> {
        const tempArr = [...this.state.arr]
        const index = tempArr.indexOf(currentNote)
        console.log(index)
        if(index===-1)
        {
            return
        }
        tempArr.splice(index,1)
        this.setState({arr:tempArr, currentNote:this.blankNote()})
        //localStorage.setItem('array', JSON.stringify(this.state.arr));


    }

     


    render() {
        return (
            <div className="Main">
                <Sidebar resetNote={this.resetNote} />
                <NoteList setCurrentNote={this.setCurrentNote} arr={this.state.arr} />
                <NoteForm currentNote={this.state.currentNote}   saveNote={this.saveNote} deleteNote={this.deleteNote}/>
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