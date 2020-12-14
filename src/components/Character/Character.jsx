import React, {useState} from 'react';
import s from './Character.module.css';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import spinner from '../../img/spinner.gif';

const Character = (props) => {

    const [item,setItem] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const characterId = props.match.params.char_id;

    axios.get('https://www.breakingbadapi.com/api/characters/' + characterId).then( instance => {
        setItem(instance.data);
        setIsLoading(false);
    })

    if(isLoading) {
        return <div className={s.spinnerBox}>
            <img src={spinner} alt="" className={s.spinner}/>
        </div>;
    }

    return (
        <div>
            {item.map( item => {
                return(
                    <div className={s.characterPage}>
                        <div className={s.info}>
                            <img src={item.img} alt="" className={s.image}/>
                            <div>
                                <ul className={s.list}>
                                    <li>Name: {item.name}</li>
                                    <li>Birthday: {item.birthday}</li>
                                    <li>Occupation: {item.occupation}</li>
                                    <li>Status: {item.status}</li>
                                    <li>Nickname: {item.nickname}</li>
                                    <li>Portrayed: {item.portrayed}</li>
                                </ul>
                            </div>
                        </div>
                        <Link to='/'>Back To Characters</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default withRouter(Character);