import React, { useState } from "react";

const SearchUserByEmail = (props) => {
  const [email, setEmail] = useState("");
  const route = props.route
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const findUser = async (e) => {
    const token = localStorage.getItem('token')
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    var data = { email };
    console.log("Finding user:", data);
    // Add the logic to actually fetch the user data based on the email
    const response = await fetch(`https://dietwell-1-hlvk.onrender.com/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <form className="max-w-md mx-auto my-10 p-5 shadow-md" onSubmit={findUser}>
      <div className="mb-4">
        <label
          htmlFor="searchuser"
          className="block text-sm font-medium text-gray-700"
        >
          Enter Email to find user
        </label>
        <input
          type="text"
          name="searchuser"
          id="searchuser"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <input
        type="submit"
        value="Find"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      />
    </form>
  );
};

export default SearchUserByEmail;
