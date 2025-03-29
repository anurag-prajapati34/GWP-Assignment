import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

const {editUser}=useContext(UserContext)

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(response.data.data);
    } catch (err) {
     
      toast.error("Error fetching user data.")
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
   const updateedUser=await editUser(user,id);
   if(updateedUser){
    navigate('/users')
   }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit User</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <input
              type="text"
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;