import React, { useRef } from 'react'

export default function AddItem({ list, setList }) {
    const spanRef = useRef(null);

    function handleAdd() {
        setList([{
            task: spanRef.current.innerHTML,
            done: false
        }, ...list]);

        spanRef.current.innerHTML = '';
    }

    return (
        < div className='grid grid-cols-11 border border-gray-600 mb-2 rounded-xl p-1' >
            <span
                ref={spanRef}
                contentEditable={true}
                className='outline-none col-span-10 transition-all duration-200 border-opacity-0 focus:border-opacity-100 hover:border-opacity-100 border-b border-black m-1'
            >
            </span>
            <button onClick={handleAdd} className='rounded-lg bg-green-500 hover:bg-green-400 text-white focus:outline-none col-span-1 px-2 py-1 m-auto'>Add</button>
        </div >
    )
}
