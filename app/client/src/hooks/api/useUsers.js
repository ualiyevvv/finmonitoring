import React, {useEffect, useState} from 'react'

function log(...str){
    // return console.log(...str);
}

/**
 * Должен предоставлять все функции для загрузки всех отелей, создания нового, удаления, изменения,
 * */
export default function useUsers(){

    /** функция должна вызываться в начале приложения, а дальше по просьбе user-а или при изменении user-a подгружать отели. Хз */
    async function searchUsers(query){
        try{
            const res = await fetch("/api/user?" + new URLSearchParams(query));
            const json = await res.json();
            log("useUsers", json);
            return json;
        }catch(e){
            log(e);
            return null;
        }
    }

    async function getUser(id){
        try{
            const res = await fetch(`/api/user/${id}`);
            const json = await res.json();
            log("useUsers", json);
            return json;
        }catch(e){
            log(e);
            return null;
        }
    }


    return {searchUsers, getUser};
}