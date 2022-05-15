import axios from "axios";

const URL = "http://localhost:3000/penulis";

const register = async (penulis) => {
  try {
    let register = await axios({
      method: "POST",
      url: URL + "/register/",
      data: penulis,
    });
    console.log(register.data);
  } catch (e) {
    console.log(e);
  }
};

export { register };
