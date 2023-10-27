// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });

import axios from "axios";

// };
export const Ajax = async function (url, dataUploaded) {

  const res = await axios.post(url, dataUploaded);

  return res.data;


  // throw error
  // if (!res.ok) throw new Error(`try again`);

  // return data;
};
