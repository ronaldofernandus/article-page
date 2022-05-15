import axios from "axios";

const loginAxios = async (penulis) => {
  try {
    let login = await axios({
      method: "POST",
      url: "http://localhost:3000/penulis/login",
      data: penulis,
    });
    console.log(login.data);
  } catch (e) {
    console.log(e);
  }
};

export { loginAxios };
