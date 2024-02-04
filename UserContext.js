import { createContext, useContext, useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './firebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const [user, setUser] = useState(null | User);

  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH,(user)=>{
      setUser(user);
    }) 
    user && getUserData();
  },[])

  const getUserData = async ()=>{
    const docRef = doc(FIREBASE_DB, "users", user?.uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists())
    {
      const data = docSnap.data();
      if (Object.keys(userData).length === 0) {
        setUserData(data);
      } else {
        setUserData({ ...userData, ...data });
      }
      console.log(userData);
    }
  }

  return (
    <UserContext.Provider value={{ user, userData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
