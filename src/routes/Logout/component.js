import React from 'react'
import { Redirect } from 'react-router-dom'

function Logout(props){
    props.setAccessToken()
    return <Redirect to={{
        pathname: '/login',
    }} />
}

export default Logout
