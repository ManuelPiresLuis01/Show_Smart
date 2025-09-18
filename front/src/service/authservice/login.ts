import type { login } from "../types/auth.types";
import { loginRoute } from "../routes/apiRoutes/auth.route";
import { home } from "../routes/frontRoutes/front.routes";
import api from "../api";

export default function orderLogin(login: login) {
  console.log(login);
  try {
    const response = api.post(loginRoute, login);
    window.location.href = home;
    console.log(response);
    return response;
  } catch (error: any) {
    console.error(error);
    return error;
  }
}
