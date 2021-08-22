import React, { useState, useEffect } from "react"

    
export const AllUsersPage = () => { 
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);       
        
        const [users, setUsers] = useState([]);             


    useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);  
          setUsers(result);
        },
       
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }, []);
   

   
        return (
        <>
            <h5>List of Users:</h5>
                {users.map(value => (
                <ul> 
                    <li>User id: {value._id}</li>                    
                    <li>User name: {value.name}</li>
                    <li>User surname: {value.surname}</li>
                    <li>User email: {value.email}</li>                    
                    <li><img src={`http://localhost:3000/${value.photo}`} /></li>
                </ul>    
                 ))} 
                        
        </>
        );
  
}