// "use client";

// import React, { useEffect, useState } from "react";

// const TestComp = () => {
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     fetch("/api/getEmail")
//       .then((response) => {
//         console.log(response);
//         if (!response.ok) {
//           throw new Error("Failed to fetch email");
//         }

//         console.log(response.json);
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Data received:", data); // Logging the received data
//         setEmail(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching email:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <p>Email: {email}</p>
//     </div>
//   );
// };

// export default TestComp;

// import React, { useState } from "react";

// const TestComp = () => {
//   const [email, setEmail] = useState("");

//   const handleInputChange = (e: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();

//     // Save email to JSONBin
//     try {
//       console.log(email);
//       const response = await fetch("/api/saveEmail", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({ email }),
//       });

//       console.log(response);
//       console.log(email);
//       console.log(response.body);

//       if (!response.ok) {
//         throw new Error("Failed to save email");
//       }

//       console.log("Email saved successfully");
//     } catch (error) {
//       console.error("Error saving email:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={handleInputChange}
//         placeholder="Enter your email"
//       />
//       <button type="submit">Save Email</button>
//     </form>
//   );
// };

// export default TestComp;
