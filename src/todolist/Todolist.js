import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';
import githubLg from '../todolist/Vector-1.png'
import linkedinLg from '../todolist/Vector.png'
import gmailLg from '../todolist/Group.png'

import PieChart from './ChartPie';
const infoArray = [

    {
        id:1,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        completed: false
    },

]  


export default function Todolist() {
    const [arrItems, setArrItem] = useState(infoArray);
    const [value, setValue] = useState('');
    const  inputRef = useRef();
  
    const completedTasksQuantity = arrItems.filter(item => item.completed).length;
    const uncompletedTasksquantity = arrItems.filter(item => !item.completed).length;
    
    useEffect(() => {
      inputRef.current.focus();
    },[] )
    
    
    function checkboxFunc(cameItem){
        const newArr =  arrItems.map( item => {
        
            if(item.id === cameItem.id){
                item.completed = !item.completed; 
                

            }
           
           return item;
        })

       
         
        setArrItem(newArr);
    }

    function onAddNewItem(e){
        e.preventDefault();
        let newItems = [];
      
        if(value.trim() === ""){
            
        } else{
            newItems =[
                {
                    id: Date.now(),
                    title:  value ,
                    completed: false,
                },
                ...arrItems,
            ]
            setValue('');
            setArrItem(newItems);
            
        }

    }
    
    function deleteItem(id){
       
        setArrItem(arrItems.filter( item => item.id !== id ));
        

        

    }

    return (
        <div className='main-div'>
            <div className='left-container'>
                <div className='left-inner-div'>
                    <div className='submit-div'>
                        <form action='' onSubmit={onAddNewItem} >
                            <input 
                                ref={inputRef}
                                type="text" 
                                value={value} 
                                onChange={e => setValue(e.target.value)} 
                                placeholder="Write and submit your plan here"
                            />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                    <div className='statistics-container'>
                        <h2>Statistics</h2>
                        
                        <PieChart 
                            completedTasks = {completedTasksQuantity}
                            unCompletedTasks = {uncompletedTasksquantity} 
                        />
                            
                        
                    </div>

                    <div className='info-container'>
                        <a href='https://github.com/SandroSh' target="blank" ><img src={githubLg} alt="github icon" /></a>
                        <a href='https://www.linkedin.com/in/sandro-shubitidze-65313421a/' target="blank" ><img src={linkedinLg} alt="linkedin icon" /></a>
                        <a href="mailto:shubitidzesandro12@gmail.com" target="blank" ><img src={gmailLg} alt="gmail icon" /></a>
                    </div>
                    <h3 className='creator-h3'>Designed And Developed By Sandro Shubitidze</h3>
                </div>
            </div>

            <div className='right-container'>
                <ul className='main-ul'>
                    {
                        arrItems.map((item) => {
                            return(
                                <li key={item.id}  className={classNames({liComp: item.completed})} >
                                    <input  
                                            type="checkbox" 
                                            checked={item.completed} 
                                            onChange={ () => checkboxFunc(item)} 
                                    />
                                    <div className='inner-div'>
                                        
                                        <p className={classNames({completed: item.completed})}>{item.title}</p>    
                                    </div>
                                    <button type='submit' onClick={() =>deleteItem(item.id)}>X</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
