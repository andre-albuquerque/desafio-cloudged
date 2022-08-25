import {useState} from "react";

import {ReactComponent as AddLogo} from './media/add.svg';
import {ReactComponent as DeleteLogo} from './media/delete.svg';
import {ReactComponent as CheckLogo} from './media/check.svg';

import "./Lista.css"

export default function Lista() { 

    const [input, setInput] = useState({ inputValue: "" });

    const [task, setTask] = useState([])

    const [done, setDone] = useState([])

    const taskSubmit = ((event)=> {

        event.preventDefault();

        const { inputValue } = input

        if (inputValue.length > 0){

            setTask([
                inputValue, ...task
            ]) 
            
            setInput({ inputValue: "" })
        }    
    
    })

    const taskDone = ((event, value)=>{

        event.preventDefault();

        setDone([
            value, ...done
        ])

        setTask(task.filter(item => item !== value))

    })

    const taskDelete = ((event, value)=>{

        event.preventDefault();
                
        setTask(task.filter(item => item !== value))
    })  

    const handleKeyEvent = (event) => {
        if(event.key === 'Enter'){
            taskSubmit(event)
        }
    }

    return (
        <div className="task--container">
            <div className="input">
                <input 
                    id="input--field"
                    type="text" 
                    autoComplete="off"
                    name="input" 
                    maxLength={30}
                    placeholder="Insira uma nova tarefa"
                    value={input.inputValue || "" } 
                    onKeyPress={handleKeyEvent}
                    onChange={({ target: { value } }) => setInput({inputValue: value})}
                />

                <AddLogo id="add--logo" type="submit" onClick={(event) => taskSubmit(event)}>Adicionar</AddLogo>
                

            </div>

            <div className="open--div">

                <h2 className="tasks--open">Tarefas em aberto</h2>

                {task.length > 0 ? task.map((value, key)=>{
                    return <div className="item" key={key}>
                        <div id="item--value" >{value}</div> 
                        <CheckLogo id="check--logo" onClick={(event) => taskDone(event, value)}>Concluído</CheckLogo>
                        <DeleteLogo id="delete--logo"  onClick={(event) => taskDelete(event, value)}>Deletar</DeleteLogo>                        
                    </div>
                }):''}

            </div> 
            <hr/>
            <div className="closed--div">
                <h2 className="jobs--done">Tarefas concluídas</h2>

                {done.length > 0 ? done.map((value, key)=>{
                    return <div id="done--value" key={key}>{value}</div>
                }):''}
            </div>

        </div>
    )
}

