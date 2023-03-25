import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransUA() {
  const [username, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .get("http://localhost:4000/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setName(res.data.username);
        localStorage.setItem("username", res.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-200 h-screen w-64 flex flex-col">
        <div className="py-4 px-6">
          <h2 className="text-lg font-semibold mb-4">Transport Portal</h2>
          <ul>
            <li className="mb-2">
              <a href="/transport/landingPageTrans" className="text-gray-800 hover:text-gray-600 font-semibold">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/data/transPR" className="text-gray-800 hover:text-gray-600 font-semibold">
                Pending Request
              </a>
            </li>
            <li className="mb-2">
              <a href="/data/transUA" className="text-gray-800 hover:text-gray-600 font-semibold">
                Update Availability
              </a>
            </li>
            
          </ul>
          <button className="bg-red-500 text-white font-semibold py-2 px-4 mt-4 rounded hover:bg-red-600" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full bg-gray-100">
    
        {/* Main content area */}
        
        <div className="w-full h-screen flex justify-center items-center">
  <div className="w-1/2 bg-white rounded-lg p-8">
    <h2 className="text-2xl font-bold mb-4">Update Passenger Capacity</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
          Name of Agency
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="location"
          type="text"
          placeholder="Enter your Agency Name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="people">
          New capacity of Passengers
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="people"
          type="number"
          placeholder="Capacity"
          min="1"
          required
        />
      </div>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  </div>
</div>


      </div>
    </div>
  );
}

export default TransUA;
