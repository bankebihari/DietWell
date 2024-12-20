import { useState } from "react";
import { NavLink } from "react-router-dom"
import { toast } from "react-toastify";

const DietitionNavbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const logout = async(e)=>{
      const token = localStorage.getItem('token')
      e.preventDefault();
      // const token = sessionStorage.getItem('token')
      const response = await fetch("https://dietwell-1-hlvk.onrender.com/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        credentials: "include",
        // body: JSON.stringify(),
      });
      const result = await response.json()
      if(!response.ok){
        toast.error(result.message,{
          position : "top-center"
        })
        return
      }
      if(response.ok){
        localStorage.clear();
        toast.success(result.message,{
          position : "top-center"
        })
        window.location.reload(false);
        // nevigate('/user');
        return
      }
    }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <nav className="bg-[#4a5976] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-white font-bold">Doctor Dashboard</div>
          </div>
          <div className="hidden md:flex items-center fond-bold">
            <NavLink to="/">
              <button className="text-white  hover:text-green-500 px-3 py-2">
                Dashboard
              </button>
            </NavLink>
            <NavLink>
              <button onClick={logout} className="text-white hover:text-green-500 px-3 py-2">
                Logout
              </button>
            </NavLink> 
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 px-3 py-2"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <NavLink to="/">
            <div className="block text-white w-full  text-left px-3 py-2">
              Dashboard
            </div>
          </NavLink>
          <NavLink>
              <button onClick={logout} className="text-white hover:text-gray-300 px-3 py-2">
                Logout
              </button>
            </NavLink> 
         
         
         
        
        </div>
      )}
    </nav>
    )
}
export default DietitionNavbar