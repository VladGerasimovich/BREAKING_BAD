import React, {useState} from 'react';
import s from './Characters.module.css'
import axios from 'axios';
import {Link} from "react-router-dom";
import spinner from "../../img/spinner.gif";

const Characters = () => {

    const [items,setItems] = useState([]);
    const [isLoading,setIsLoading] = useState(true);


    axios.get('https://www.breakingbadapi.com/api/characters').then( instance => {
        setItems(instance.data);
        setIsLoading(false);
    })

    if(isLoading) {
        return <div className={s.spinnerBox}>
            <img src={spinner} alt="" className={s.spinner}/>
        </div>;
    }

    return (
        <div className={s.cards}>
            {items.map( item => {
                return (
                    <Link to={'/characters/' + item.char_id}>
                        <div className={s.card}>
                            <img src={item.img} alt="" className={s.image}/>
                            <div className={s.about}>
                                <div className={s.name}>
                                    {item.name}
                                </div>
                                <div className={s.click}>
                                    Click
                                </div>
                            </div>
                        </div>
                    </Link>
                    )
            })}
        </div>
    )
}

export default Characters;