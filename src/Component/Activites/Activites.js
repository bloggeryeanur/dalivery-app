import React, { useEffect, useState } from 'react'
import Dalilywork from '../Info/Dalilywork/Dalilywork'
import Info from '../Info/Info'
import './activites.css'


const Activites = () => {
    const [informations, setInformations] = useState([])
    const [time, setTime] = useState([])

    useEffect(() => {
        fetch('activati.json')
            .then(res => res.json())
            .then(data => setInformations(data))
    }, [])


    const btn = (info) => {
        const newTime = [...time, info]
        setTime(newTime)
    }

    return (
        <div className="container">
            <div className="activite-container">
                <div className="activite  text-dark m-2">
                    {
                        informations.map(info => <Dalilywork
                            info={info}
                            btn={btn}
                        ></Dalilywork>)
                    }
                </div>

                <div className="personal-info">
                    <Info getTime={time}></Info>
                </div>
            </div>
        </div>
    )
}
export default Activites