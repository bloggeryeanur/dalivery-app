import React from 'react'

const Dalilywork = (props) => {

    const { btn } = props
    const { name, jam, time, date,img } = props.info
    return (
        <div >
            <h3>{name}</h3>
            <img style={{ height: '150px', width: '150px' }} src={img}
                alt="" />
            <p>Zone : {jam}</p>
            <p>Date : {date}</p>
            <p>Time : {time}</p>

            <button className='btn btn-info' onClick={() => { btn(props.info) }}>Add to list</button>
        </div>
    )
}

export default Dalilywork