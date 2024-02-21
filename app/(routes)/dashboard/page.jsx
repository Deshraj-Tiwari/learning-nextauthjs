import React from "react";

const Dashboard = () => {
  return (
    <main className="flex flex-col items-center justify-center h-[80vh] ">
      <div className="rounded-lg border-t-4 border-green-500 p-4 w-[25vw] shadow-2xl">
        <h1 className="font-bold text-2xl">User Details</h1>
        <p className="mt-2 mb-5 ms-5 text-md">
          Name: <b>Deshraj Tiwari </b> <br />
          Email: <b>deshrajtiwari690@gmail.com </b>
        </p>
        <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded">
          Logout
        </button>
      </div>
    </main>
  );
};

export default Dashboard;
