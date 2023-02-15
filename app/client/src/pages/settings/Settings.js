import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import Main from "../main/Main";
import useUsers from "../../hooks/api/useUsers";
import setIds from "../../../../common/handlers/setIds";

function log(...str){
    return console.log("Settings:", ...str);
}

function User({user, setStatus}){
    const [s, setS] = useState(user.status);

    return (<tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
            <select onChange={e => {console.log(e.target.value); setS(e.target.value);}}>
                <option selected={user.status === "banned"}>banned</option>
                <option selected={user.status === "waiting"}>waiting</option>
                <option selected={user.status === "active"}>active</option>
            </select>
        </td>
        <td><button onClick={e => setStatus(user, s)}>change</button></td>
    </tr>)
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

    async function setStatus(user, status){
        try{
            const res = await fetch('/api/user', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id: user.id, status})
            });
            const json = await res.json();
            console.log(json);
        }catch(e){
            console.log(e);
        }
    }

    return (
        <Main>
            <div className="workflow">
                <h1>Users</h1>
                <div className="table" id="managers">
                    <div className="table__body">
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>status</th>
                                    <th>tools</th>
                                </tr>
                            </thead>
                            <tbody id="flightsBody">
                            {users.map((user, i) => {
                                return <User key={i} user={user} setStatus={setStatus}/>
                            })}
                            </tbody>
                        </table>
                        {/* {selectedId !== null && (
                            <Modal id={selectedId} onClose={handleModalClose}> 
                                <p>Id: {selectedId}</p>

                                <iframe 
                                    scrolling="no" 
                                    onLoad={ () => setIsMapLoading(false)} 
                                    src={`https://flighttrack.tavtechnologies.aero/flight_track?flight=${selectedId}`} 
                                ></iframe>
                            </Modal>
                        )} */}
                    </div>
                </div>
            </div>
            

        </Main>
    );
}