import React, { useState } from 'react';

const DashboardCard = ({ user }) => {
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [toDelete,setToDelete] = useState("");
  const toggleDetails = (e) => {
    e.preventDefault();
    
    setShowAllDetails((prev) => !prev);
  };
  const deleteDetails = async(e)=>{
    const token = localStorage.getItem('token')
    const response = await fetch("https://dietwell-1-hlvk.onrender.com", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
      },
      credentials: "include",
      // body: JSON.stringify(),
    });
    console.log(toDelete)
  }
  return (
    <div className="bg-[#4a5976] rounded-lg  p-4 mb-4">
      <h2 className="text-lg text-white font-bold mb-2">User Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {Object.entries(user).slice(0, 6).map(([key, value]) => (
          <div key={key}>
            
            
            <p className="text-sm font-semibold text-yellow-500">{key}</p>
            <p className="text-sm font-semibold text-white overflow-auto">{value}</p>
            
          </div>
          
        ))}
      </div>
     <div className='flex justify-between'>

      <div className="mt-4">
        <button
          className="py-2 px-4 bg-yellow-500 text-white text-semibold rounded-md hover:bg-yellow-600 transition duration-300"
          onClick={toggleDetails}
          >
          {showAllDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      
          </div>
      
      {showAllDetails && (
        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(user).map(([key, value]) => (
              <div key={key}>
                <p className="text-sm font-semibold text-yellow-500">{key}</p>
                <p className="text-sm font-semibold text-white overflow-auto">{value}</p>
              </div>
              
            ))}
          </div>
          
        </div>
      )}
      
    </div>
  );
};

export default DashboardCard;