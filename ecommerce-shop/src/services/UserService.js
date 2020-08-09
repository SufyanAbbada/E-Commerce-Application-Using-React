import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  constructor() {
    super();
  }
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          //As our Login Process gets successful, the API will return us a token and we simply are
          //creating that token to be stored in the Local Storage of the browser.
          //And that token is sent with every request and it will be validated and then action is done.
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  register = (name, email, password) =>
    this.post("users/register", { password, email, name });

  logout = () => {
    localStorage.removeItem("token");
    //By Logout, we simply will clear the local Storage and as the token is not recieved, it can only see those things.
  };

  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };

  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "admin") return true;
      else return false;
    } else return false;
  };
}

let userService = new UserService();
export default userService;
