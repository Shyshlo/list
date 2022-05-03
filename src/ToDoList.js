import { Component } from 'react';
import imageList1 from './imageList1.png';

export class ToDoList extends Component {
    state = {
        writeInput: '',
        toDoList: []
    }

    changeText(e) {
        this.setState({writeInput:e})
    }

    addItem(text) {
        if (text === '') {
            alert ('Please enter an item')
        } else {
        let listarray = this.state.toDoList;
        listarray.push(text)
        this.setState({toDoList: listarray, writeInput: ''})
        console.log(listarray);
    }
}
    crossWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }
    deleteItem() {
        let listarray = this.state.toDoList;
        listarray = [];
        this.setState({toDoList: listarray})
    }

    onFormSubmit (p){
    p.preventDefault();
    }
    render() {
        return(
           
            <div>
                 <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type='text' placeholder='Write the list' 
                onChange={(e) => {this.changeText(e.target.value)}} 
                value={this.state.writeInput} />
            </div>
            <div className='container'>
                <button onClick={() => this.addItem(this.state.writeInput)} className='btn add'>Add</button>
            </div>
            <ul>
                {this.state.toDoList.map((item, index) => (
                    <li onClick={this.crossWord} key={index}>
                    <img src={ imageList1 } width='40px' /> {item}
                    </li>
                ))}
            </ul>
            <div className='container'>
            <button onClick={() => this.deleteItem()} className='btn delete'>Delete</button>
            </div>
            </form>
            </div>
        )
    }
   
    
}