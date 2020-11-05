import React, { useState } from 'react'

import './assets/css/tailwind.output.css'
import AddItem from './components/AddItem'
import ToDoItem from './components/ToDoItem'

export default function App() {

    const [list, setList] = useState([]);

    //TODO fix responsive design.


    return (
        <div className='grid min-h-screen content-center'>
            <div className='grid grid-cols-1 h-full mx-auto w-11/12 max-w-xl'>
                <h1 className='text-center text-2xl font-bold border border-gray-600 rounded-xl mx-auto py-1 px-2 my-2'>To-do</h1>
                <AddItem list={list} setList={setList} />
                {list.length !== 0 && list.filter((li, i) => !li.done).length ?
                    (<ul className='border border-gray-600 rounded-xl'>
                        {list.map((item, index) => !item.done ? <ToDoItem item={item} index={index} key={index.toString()} list={list} setList={setList} /> : '')}
                    </ul>) : ''
                }
                {list.length !== 0 && list.filter((li, i) => li.done).length ?
                    ([
                        <h1 className='text-center text-2xl font-bold border border-gray-600 rounded-xl mx-auto py-1 px-2 my-2' key='1'>Done</h1>,
                        <ul className='border border-gray-600 rounded-xl' key='2'>
                            {list.map((item, index) => item.done ? <ToDoItem item={item} index={index} key={index.toString()} list={list} setList={setList} /> : '')}
                        </ul>
                    ]) : ''
                }


            </div >
        </div>
    )
}
