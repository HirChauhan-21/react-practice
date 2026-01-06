// import { useEffect, useState } from "react";



// import UseEffectMethod from "./components/useeffectmethod";

// ------------------------------------------------------------1 - useEffect---------------------------------

// const App = () => {

//     const [quote, setQuote] = useState(null);
//     useEffect(() => {
//       fetch("https://dummyjson.com/quotes/1")
//         .then((response) => response.json())
//         .then((data) => setQuote(data))
//         .catch((error) => console.log(error));
//     });
//     return (
//       <div>
//         {quote && (
//           <div>
//             <h2>{quote.id}</h2>
//             <h2>{quote.quote}</h2>
//             <h2>{quote.author}</h2>
//           </div>
//         )}
//       </div>
//     );
//   };

// export default App;

// const App = () => {
//   return (
//     <div>
//       <UseEffectMethod />
//     </div>
//   );
// };

// export default App;

// ------------------------------------------------------5- axios-------------------------------------------

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [quote, setQuote] = useState(null);
//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/quotes/5")
//       .then((response) => setQuote(response.data))
//       .catch((error) => console.log(error));
//   },[]);
//   return (
//     <div>
//       {quote && (
//         <div>
//           <h2>{quote.id}</h2>
//           <h2>{quote.quote}</h2>
//           <h2>{quote.author}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

//   -------------------------------------3- next js server side----------------------------------------

// export default async function app() {
//   const response = await fetch("https://dummyjson.com/quotes/1");
//   const data = await response.json();

//   return <h3>{data.quote}</h3>;
// }

//   -------------------------------------4- next js client side----------------------------------------

// "use client"

// export default function App() {
//   const [quote, setQuote] = useState(null);
//   useEffect(() => {
//     fetch("https://dummyjson.com/quotes/4")
//       .then((response) => response.json())
//       .then((data) => setQuote(data))
//       .catch((error) => console.log(error));
//   });
//   return (
//     <div>
//       {quote && (
//         <div>
//           <h2>{quote.id}</h2>
//           <h2>{quote.quote}</h2>
//           <h2>{quote.author}</h2>
//         </div>
//       )}
//     </div>
//   );
// }


// --------------------------------------6- tanstack query---------------------------------------

// import { useQuery } from '@tanstack/react-query'
// const fetchQuotes = async () => {
//   const response = await fetch("https://dummyjson.com/quotes/6");
//   return response.json();
// };


// const App = () => {
//   const { data, isPending, error } = useQuery({
//     queryKey: ['quotes'],
//     queryFn: fetchQuotes
//   })

//   if (isPending) {
//     return <span>Loading...</span>;
//   }
//   if (error) {
//     return <span>Error</span>;
//   }

//   return (
//     <div>{data.quote}</div>
//   )
// }

// export default App




import { useLoaderData } from "react-router-dom";

const App = () => {
  const data = useLoaderData();

  return (
    <div>
      <h2>{data.quote}</h2>
      <p>{data.author}</p>
    </div>
  );
};

export default App;
