import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateUser() {
    const navigate = useNavigate()
    const location = useLocation()
    const data= location.state
    const [updatedUser, setUpdatedUser] = useState({
    });
    const handleOnChange = (e: any) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
      };

      const getUser = async (e: any) => {
        e.preventDefault();
        const res = await axios.put(`http://localhost:4000/api/update/${data}`, updatedUser);
        if (res.status === 200) {
            
          navigate('/')
        }
      };
      const user = async ()   => {
        const res = await axios.get(`http://localhost:4000/api/users/${data}`)
        console.log("res data is" , res)
        if(res?.data?.success === true){
            console.log("res data is" , res?.data?.user)
            setUpdatedUser(res?.data?.user)
        }
    }
      useEffect(() => {
      
        
        user()
      }, [data])

  return (
    <>
      <div className="border-2 m-4 p-4 rounded-lg min-h-screen">
        <h1 className="text-2xl font-semibold">Update User</h1>

        <form className="border-2 m-4 rounded-lg p-4 h-[500px]" onSubmit={getUser}>
        <div className="mb-2">
          <label className="text-2xl mr-2" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            value={updatedUser?.name}
            onChange={handleOnChange}
            className="border-none bg-gray-300 text-black p-4 rounded-lg outline-none text-2xl"
            type="text"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-2">
          <label className="text-2xl mr-2" htmlFor="fathername">
            Father Name
          </label>
          <input
            name="fathername"
            onChange={handleOnChange}
            className="border-none bg-gray-300 text-black p-4 rounded-lg outline-none text-2xl"
            type="text"
            value={updatedUser?.fathername}
            placeholder="Enter Father Name"
          />
        </div>
        <div className="mb-2">
          <label className="text-2xl mr-2" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            value={updatedUser?.email}
            onChange={handleOnChange}
            className="border-none bg-gray-300 text-black p-4 rounded-lg outline-none text-2xl"
            type="text"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-2">
          <label className="text-2xl mr-2" htmlFor="phone">
            Phone
          </label>
          <input
            name="phone"
            value={updatedUser?.phone}
            onChange={handleOnChange}
            className="border-none bg-gray-300 text-black p-4 rounded-lg outline-none text-2xl"
            type="number"
            placeholder="Enter Number"
          />
        </div>
        <div className="flex justify-center">
          {" "}
          <button
            className="p-4 mt-4 text-2xl bg-blue-900 text-white rounded-lg hover:bg-blue-400"
            type="submit"
          >
            Update User
          </button>
        </div>
      </form>
      </div>
    </>
  );
}

export default UpdateUser;
