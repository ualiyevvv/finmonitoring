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
            <div class="workflow">
                <h1>Users</h1>
                <div className="table" id="managers">
                    <div className="table__body">
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>email</th>
                                </tr>
                            </thead>
                            <tbody id="flightsBody">
                            {users.map((user, i) => {
                                return <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
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