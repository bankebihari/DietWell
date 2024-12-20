import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";

const WeightGain = () => {
  const [menu1, setMenu1] = useState("");
  const [resgot, setResgot] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const handleClick = (day) => {
    setSelectedDay(day);
  };
  const weightGain = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch("https://dietwell-1-hlvk.onrender.com/services/weightgain", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
      },
      credentials: "include",
      // body: JSON.stringify(),
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error(result.message,{
        position:"top-center"
      })
      console.log("get")
      return;
    }
    if (response.ok) {
      var x = await JSON.parse(result.data.function_call.arguments);
      setMenu1(x);
      console.log("get")
      setResgot(true);
      return;
    }
  };
  useEffect(() => {
    weightGain();
  }, []);
  const DayCard = ({ day }) => (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-[#4a5976]"
      onClick={() => handleClick(day)}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{day}</div>
      </div>
    </div>
  );
  const NumberCard = ({ number }) => (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-[#4a5976] transform rotate-180"
      onClick={() => handleClick(null)}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4  transform rotate-180">
          Calories: {menu1.days[number - 1].totalNutrients.calories}{" "}
          Carbohydrates: {menu1.days[number - 1].totalNutrients.carbohydrates}{" "}
          Fats: {menu1.days[number - 1].totalNutrients.fats} Protein:{" "}
          {menu1.days[number - 1].totalNutrients.proteins} Fiber:{" "}
          {menu1.days[number - 1].totalNutrients.fibers}
        </div>
        <div className="font-bold text-xl mb-4  transform rotate-180">
          Dinner: {menu1.days[number - 1].dinner}
        </div>
        <div className="font-bold text-xl mb-4  transform rotate-180">
          Lunch: {menu1.days[number - 1].lunch}
        </div>
        <div className="font-bold text-xl mb-4  transform rotate-180">
          Breakfast: {menu1.days[number - 1].breakfast}
        </div>
      </div>
    </div>
  );
  return (
    <div className="bg-[#233037] pt-24 min-h-screen text-white">
      Welcome to weight gain
      {resgot ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {days.map((day, index) => (
            <div key={index} className="relative">
              {/* {console.log(menu1)} */}
              {selectedDay === day ? (
                <NumberCard number={index + 1} />
              ) : (
                <DayCard day={day} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};
export default WeightGain;
