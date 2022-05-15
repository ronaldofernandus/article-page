import axios from "axios";
const URL = "http://localhost:3000/penulis";
const loginAxios = async (penulis) => {
  try {
    let login = await axios({
      method: "POST",
      url: URL + "/login",
      data: penulis,
    });
    console.log(login.data);
  } catch (e) {
    console.log(e);
  }
};

export { loginAxios };
