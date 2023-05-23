import React, { useEffect, useState } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './fire';

const useAuth = () => {

  const [ user, setUser ] = useState('');

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(user)
        } else {
            setUser('')
        }
    }) 
   }

  useEffect(() => {
    authListener();
  }, [])

  return [
    user
  ]
}

export default useAuth