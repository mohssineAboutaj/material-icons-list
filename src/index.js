const { get } = require("axios");
const writeJson = require("write-json");
const { baseURL } = require("./global");

// get data
get(baseURL).then(({ data }) => {
  // trim & split
  data = data.trim().split(")]}'");

  // convert to json format
  data = JSON.parse(data[1]);

  // insert into json file
  writeJson("data.json", data.icons, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("inserted successfuly");
    }
  });
});
