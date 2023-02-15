import React from 'react';

import LoadingIcons from 'react-loading-icons'

export default function Waiting(){
    return (<>
        <h1>please wait for account verification</h1>
        <LoadingIcons.Circles stroke="black" />
    </>);
}