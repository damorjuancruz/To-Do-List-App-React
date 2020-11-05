import React from 'react'

import { FaRegCheckSquare, FaRegSquare } from 'react-icons/fa';


export default function CheckBox({ done, onClick }) {
    return (
        !done ?
            <FaRegSquare
                size='1.5rem'
                className='col m-auto cursor-pointer transition-all duration-200'
                onClick={onClick} /> :
            <FaRegCheckSquare
                size='1.5rem'
                className='col m-auto cursor-pointer transition-all duration-200'
                onClick={onClick} />
    )
}
