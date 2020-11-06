import React, { useEffect, useRef } from 'react'

export default function AddItem({ list, setList }) {
    const spanRef = useRef(null);

    useEffect(() => {
        spanRef.current.focus();
    }, [spanRef])

    function handleAdd() {
        setList([{
            task: spanRef.current.innerHTML,
            done: false
        }, ...list]);

        spanRef.current.innerHTML = '';
    }

    return (
        < div className='col sm:col-span-2' >
            <div className='grid grid-cols-11 sm:grid-cols-12 border border-gray-600 mb-2 rounded-xl p-1 shadow-md'>
                <span
                    ref={spanRef}
                    contentEditable={true}
                    className='outline-none col-span-9 sm:col-span-11 transition-all duration-200 border-opacity-0 focus:border-opacity-100 hover:border-opacity-100 border-b border-black m-1'
                >
                </span>
                <button onClick={handleAdd} className='rounded-lg bg-green-500 hover:bg-green-400 text-white focus:outline-none col-span-2 sm:col-span-1 px-2 py-1 m-auto'>Add</button>
            </div>
        </div >
    )
}
