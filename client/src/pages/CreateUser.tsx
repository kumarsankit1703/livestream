import axios from "axios";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateUser() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    fathername: "",
    email: "",
    phone: "",
  });

  const handleOnChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const getUser = useMemo(() => {
    const getUser = async (e: any) => {
      e.preventDefault();
      const res = await axios.post("http://localhost:4000/api/create", newUser);
      if (res.status === 200) {
        navigate("/");
      }
    };
    return getUser;
  }, []);

  return (
    <div className="border-2 m-4 p-4 rounded-lg min-h-screen flex justify-center">
      <form
        className="border-2 m-4 rounded-lg p-4 h-[500px]"
        onSubmit={getUser}
      >
        <h1 className="text-2xl font-semibold mb-4 flex justify-center">
          Create User
        </h1>
        <div className="mb-2">
          <label className="text-2xl mr-2" htmlFor="name">
            Name
          </label>
          <input
            name="name"
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
            placeholder="Enter Father Name"
          />
        </div>
        <div className="mb-2">
          <label className="text-2xl mr-2" htmlFor="email">
            Email
          </label>
          <input
            name="email"
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
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
