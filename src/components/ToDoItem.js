import React, { useEffect, useRef, useState } from 'react';

import { FaTrash } from 'react-icons/fa';
import CheckBox from './CheckBox';

export default function ToDoItem({ item, index, list, setList }) {

    const [isVisible, setIsVisible] = useState(true);

    const spanRef = useRef(null)

    useEffect(() => {
        // console.log(item.task);
        spanRef.current.innerHTML = item.task;
    }, [item.task])

    function handleFocusOut(e) {
        if (e.target.innerText.length !== 0)
            setList([...list.slice(0, index), {
                task: e.target.innerHTML,
                done: item.done
            }, ...list.slice(index + 1, list.length)]);
        else
            handleRemove();

    }

    function handleDone() {
        setList([...list.slice(0, index), {
            task: item.task,
            done: !item.done
        }, ...list.slice(index + 1, list.length)]);
    }

    function handleRemove() {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true)
            setList(list.filter((_, i) => (i !== index)));
        }, 200);
    }

    return (
        <li
            className={`grid grid-cols-12 border border-gray-600 m-2 rounded-xl p-1
            ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200
            ${item.done ? 'text-gray-600 line-through' : ''}`}
        >
            <CheckBox done={item.done} onClick={handleDone} />
            <span
                key={index.toString()}
                onBlur={handleFocusOut}
                contentEditable={true}

                ref={spanRef}

                suppressContentEditableWarning={true}
                className={`
                
                outline-none col-span-10 transition-colors duration-200
                border-opacity-0 focus:border-opacity-100 hover:border-opacity-100 border-b border-black m-2
            `}>
                {/* {item.task} */}
            </span>

            <FaTrash
                size='1.3rem'
                className='col-span-1 m-auto cursor-pointer text-gray-800 hover:text-gray-700 transition-all duration-200'
                onClick={handleRemove} />
        </li >
    )
}
