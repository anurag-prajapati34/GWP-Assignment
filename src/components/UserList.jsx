import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import UserCard from "./UserCard";
import { UserContext } from "../context/UserContext";

const UserList = () => {

  

  const navigate = useNavigate();

  const {users,totalPages,setPage,page} =useContext(UserContext)







  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User List</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-1 rounded mx-2 hover:bg-blue-600 disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="text-lg">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-1 rounded mx-2 hover:bg-blue-600 disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;