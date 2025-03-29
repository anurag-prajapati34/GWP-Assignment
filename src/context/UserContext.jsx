import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

// Create the UserContext
const UserContext = createContext();

// Create a provider component
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  //fetch users
  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  //edit/update user

  const editUser = async (user,id) => {

    try {
      const response = await axios.put(`https://reqres.in/api/users/${id}`, user);
      if(response.data){
       
toast.success("User updated successfully")

        setUsers((preUsers) => preUsers.map((user) => user.id === response.data.id ? response.data : user));

        return response.data;
      }
      
    } catch (err) {
      toast.error("Error updating user")
    }
  };

  //handle use delete
  const handleDelete = async (id) => {
    try {
    const response=  await axios.delete(`https://reqres.in/api/users/${id}`);

     if(response.status===204){
      toast.success("User deleted successfully")
      setUsers((prevUsers) => prevUsers.filter((usr) => usr.id !== id));
     }
    } catch (err) {
      toast.error("Error deleting user");
      
    }
  };

  useEffect(()=>{
    fetchUsers(page)
    console.log('users',users);

  },[page])

  

  return (
    <UserContext.Provider value={{ users, fetchUsers, totalPages,editUser,setPage,page,handleDelete }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };