import { useEffect, useState } from "react";
import Toggle from "./Toggle";
import { toast } from "react-toastify";
import PendingQuery from "./PendingQuery";
import SolvedQuery from "./SolvedQuery";

const QuestionMenu = () => {
  const [status, setStatus] = useState("Pending");
  const [menu, setMenu] = useState([]);
  const setPending = () => {
    setStatus("Pending");
  };

  const setSolved = () => {
    setStatus("Solved");
  };

  const fetchQuestion = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(
      `https://dietwell-1-hlvk.onrender.com/user/dietition/fetchUserQuestions/${status}`,
      {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        credentials: "include",
      }
    );
    const result = await response.json();
    if (!response.ok) {
      toast.error(result.message, {
        position: "top-center",
      });
    }
    if (response.ok) {
      toast.success(result.message, {
        position: "top-center",
      });
      setMenu(result.data);
      console.log(result.data);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [status]);
  return (
    <div className="">
      <Toggle
        status={status}
        setStatus={setStatus}
        setPending={setPending}
        setSolved={setSolved}
      ></Toggle>
      {status === "Pending"
        ? menu.map((ele, index) => <PendingQuery key={index} menu={ele} fetchQuestion={fetchQuestion} />)
        : menu.map((ele, index) => <SolvedQuery key={index} menu={ele} />)}
    </div>
  );
};
export default QuestionMenu;
