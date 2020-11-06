import React, { useState } from 'react'

import './assets/css/tailwind.output.css'
import AddItem from './components/AddItem'
import ToDoItem from './components/ToDoItem'

export default function App() {

    const [list, setList] = useState([]);

    //TODO Dark theme.

    return (
        <div className='grid min-h-screen content-center'>
            <div className='my-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 h-full m-auto w-11/12 max-w-3xl'>
                    <u className='col sm:col-span-2 text-center text-2xl rounded-xl mx-auto py-1 px-2 my-4'>
                        <i>
                            To-do
                        </i>
                    </u>
                    <AddItem list={list} setList={setList} />
                    {list.length !== 0 && list.filter((li, i) => !li.done).length ?
                        (<ul
                            className={`
                                border border-gray-600 rounded-xl shadow-md col mb-2 sm:m-0 sm:mb-auto
                                ${list.filter((li, i) => li.done).length === 0 ? 'col-span-full' : 'sm:mr-1'}
                            `}
                        >
                            {list.map((item, index) => !item.done ? <ToDoItem item={item} index={index} key={index.toString()} list={list} setList={setList} /> : '')}
                        </ul>) : ''
                    }
                    {list.length !== 0 && list.filter((li, i) => li.done).length ?
                        <ul
                            className={`
                                    border border-gray-600 rounded-xl shadow-lg col sm:m-0 sm:mb-auto
                                    ${list.filter((li, i) => !li.done).length === 0 ? 'col-span-full' : 'sm:ml-1'}
                                `}
                        >
                            {list.map((item, index) => item.done ? <ToDoItem item={item} index={index} key={index.toString()} list={list} setList={setList} /> : '')}
                        </ul> : ''
                    }


                </div >
            </div>
        </div >
    )
}
