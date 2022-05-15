import axios from "axios";

const URL = "http://localhost:3000";

const getHomePage = async (cb) => {
  try {
    let getHomePage = await axios({
      method: "GET",
      url: URL,
    });
    cb(getHomePage.data);
    // console.log(lihatFilm);
  } catch (e) {
    console.log(e);
  }
};

export { getHomePage };
