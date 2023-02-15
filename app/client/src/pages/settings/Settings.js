import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import Main from "../main/Main";
import useUsers from "../../hooks/api/useUsers";
import setIds from "../../../../common/handlers/setIds";

function log(...str){
    return console.log("Settings:", ...str);
}

export default function Settings(){

    const { searchUsers, getUser } = useUsers();

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        (async ()=>{
            let fetchedUsers = await searchUsers();
            if(!fetchedUsers)
                return;
            fetchedUsers = setIds(fetchedUsers)
            log(fetchedUsers);
            setUsers(fetchedUsers)
        })()
    }, [])

    return (
        <Main>
            <h1>[Settings]</h1>
            <ul>
                {users.map((user, i) => {
                    return <p key={i}>{user.id} {user.name} {user.email}</p>
                })}
            </ul>

        </Main>
    );
}