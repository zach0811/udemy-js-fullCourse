import { TIMEOUT_SEC } from './config';

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};




export const ajax = async function (url, uploadData = undefined, method) {
  try {
    const fetchRecipe = fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchRecipe, timeout(TIMEOUT_SEC)]);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};

// export const ajax = async function (url, uploadData = undefined, method = 'GET') {
//   try {
//     const response = await Promise.race([
//       fetch(url, {
//         method: method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(uploadData),
//       }),
//       timeout(TIMEOUT_SEC),
//     ]);

//     if (!response.ok) {
//       const data = await response.json();
//       throw new Error(`${data.message} (${response.status})`);
//     }

//     return await response.json();
//   } catch (err) {
//     throw err;
//   }
// };

