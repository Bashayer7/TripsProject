import { makeAutoObservable } from "mobx";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  setUser = async (token) => {
    await AsyncStorage.setItem("token", token);
    this.user = decode(token);
    api.defaults.headers.common.Authorization = `Beare ${token}`;
  };

  signUp = async (user) => {
    try {
      const res = await api.post("/signup", user);
      this.setUser(res.data.token);
    } catch (error) {}
  };

  signIn = async (user) => {
    try {
      const res = await api.post("/signin", user);
      this.setUser(res.data.token);
    } catch (error) {}
  };
}

logOut = async () => {
  delete api.defaults.headers.common.Authorization;
  await AsyncStorage.removeItem("token");
  this.user = null;
};

const authstore = new AuthStore();
export default authstore;
