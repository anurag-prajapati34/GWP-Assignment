import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const {handleDelete}=useContext(UserContext);

 

  return (
    <div className="bg-white px-4 py-5 rounded-lg shadow-md border-2 flex flex-col items-center">
      <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full mb-4" />
      <h3 className="text-lg font-semibold">
        {user.first_name} {user.last_name}
      </h3>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => navigate(`/edit/${user.id}`)}
          className="bg-black text-white px-4 py-1   rounded hover:bg-gray-800"
        >
          Edit
        </button>
        <button
          onClick={()=>handleDelete(user.id)}
          className="border-2 border-black hover:bg-gray-500 text-black px-4  py-1 rounded "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;