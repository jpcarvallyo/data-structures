const https = require("https");

const apiUrl = "https://jsonmock.hackerrank.com/api/stocks?date=";

const fetchData = (n) => {
  return new Promise((resolve, reject) => {
    https
      .get(`${apiUrl}${n}`, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            let finishedData = JSON.parse(data);
            finishedData = finishedData.data[0];
            delete finishedData.date;
            resolve(finishedData);
          } catch (e) {
            reject(error);
          }
        });
      })
      .on("error", (e) => reject(e));
  });
};

fetchData("5-January-2000")
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error));
