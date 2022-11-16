import React from 'react'
import Address from './Address'
import Email from './Email'
import PersonalInfo from './PersonalInfo'
import Name from './Name'

const Profile = () => {
  return (
    <div>
        <Name />
        <PersonalInfo/>
        <Email/>
        <Address/>
    </div>
  )
}

export default Profile