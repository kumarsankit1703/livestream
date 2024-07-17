import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface User {
  id: number;
  name: string;
  email: string;
  fathername: string;
  phone: string;
}

function HomePage() {
  const navigate = useNavigate();
  const [allUserData, setAllUserData] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Function with Memoization for Catching All User Data
  const getAllUsers = useMemo(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/users");
        setAllUserData(res?.data?.user);
      } catch (error: any) {
        setError(error);
      }
    };
    return getAllUsers;
  }, []);

  const userDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/delete/${id}`
      );

      getAllUsers();
    } catch (error) {
      console.error("Error deleting user:");
    }
  };

  // Delete ALL User
  const handleDeleteAllUser = async() => {
    const res = await axios.delete('http://localhost:4000/api/delete-all')

    if(res.data.success == true){
      console.log("succerss")
      getAllUsers()
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  if (error) return <div>Error: {error}</div>;
  return (
    <div className="border-2 m-4 p-4 rounded-lg min-h-screen">
      <div className="justify-between flex p-4">
        <h1 className="text-2xl font-semibold">HomePage</h1>
        
         {allUserData.length >0 ? <button onClick={handleDeleteAllUser} className={`border-1 rounded-lg text-white bg-red-600 p-4 hover:bg-red-300 hover:text-black`}>Delete All User</button> : ""}
    
      </div>
      {allUserData?.map((user: any, i: any) => {
        return (
          <>
            <div
              key={i}
              className="flex justify-between border-b-[1px] p-4 bg-gray-200 text-black m-2"
            >
              <span>Name : {user.name}</span>
              <span>Father Name : {user.fathername}</span>
              <span>Email : {user.email}</span>
              <span>Phone : {user.phone}</span>

              <button
                className="text-blue-700 hover:text-blue-400"
                onClick={() => navigate("/updateuser", { state: user._id })}
              >
                Update
              </button>
              <button
                className="text-red-700 hover:text-red-400"
                onClick={() => userDelete(user._id)}
              >
                Remove
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default HomePage;
