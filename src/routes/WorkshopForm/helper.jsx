// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };
export const Ajax = async function (url, dataUploaded) {
  try {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUploaded),
    })
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        console.log("Success:", data);
      });
  } catch (error) {
    console.log(error);
  }

  // throw error
  // if (!res.ok) throw new Error(`try again`);

  // return data;
};
