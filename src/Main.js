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
        //arr: this.blankNote()
        arr:
        [
        {title:'Kohlrabi welsh', body:'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.'},
        {title:'Dandelion cucumber', body:'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.'},
        {title:'Prairie turnip',body:'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.'}
        ],
        

        currentNote:this.blankNote()
    }
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


        console.log(data)
        this.setState({currentNote:data})
    }

    blankNote = () => {
        return(
             {
            title:"Title your note",
            body: ''
            }
        )
    }

    // resetNote = ()=>{
    //     return(
    //         this.populateForm(this.blankNote())
    //     )
    // }


    render(){
        return(
            <div className="Main">
            <Sidebar resetNote={this.resetNote} />
            <NoteList setCurrentNote={this.setCurrentNote}  arr = {this.state.arr} />
            <NoteForm currentNote = {this.state.currentNote}  />
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