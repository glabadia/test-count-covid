//  ASYNC/AWAIT
// export default async function fetchNormal(url) {
//   console.log(url);
//   return await fetch(url).then(async response => {
//     return await response.json();
//   });
// }

// import { useEffect } from "react";

// export default url => {
//   console.log(url);

//   useEffect(() => {
//     async function fetchData() {
//       return await fetch(url).then(async response => {
//         return await response.json();
//       });
//     }
//     fetchData();
//   }, [url]);
// };

export default function fetchNormal(url) {
  console.log(url);
  return fetch(url).then(response => {
    return response.json();
  });
}
