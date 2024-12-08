import { toast } from "react-toastify";

const BASE_URL = "http://localhost:2000"; // Replace with your actual base URL

export const fetchData = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");
  
  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers, // Merge additional headers if provided
      },
    });

    if (!response.ok) {
      toast.error(response.message,{
        position:"top-center"
        
      }
      )
    }

    // return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    toast.error("Internal server error",{
      position:"top-center"
      
    }
    )
  }
};
