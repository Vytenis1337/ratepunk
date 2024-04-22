import { useState, useEffect } from "react";

const useFetchEmail = () => {
  const [emailValue, setEmailValue] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/getEmail`)
      .then((response) => {
        console.log(response.json);
        if (!response.ok) {
          throw new Error("Failed to fetch email");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setEmailValue(data);
      })
      .catch((error) => {
        console.error("Error fetching email:", error);
      });
  }, []);

  return emailValue;
};

export default useFetchEmail;
