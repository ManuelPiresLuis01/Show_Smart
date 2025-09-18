import api from "../api.ts";
import {
  registrationRoute,
  activationRoute,
} from "../routes/authroutes/auth.route.ts";
import type { user } from "../types/user.types.ts";

class Order {
  Registry = async (user: user) => {
    console.log(user);
    try {
      const response = await api.post(registrationRoute, user);
      this.sendActivationEmail(user.email);
      window.location.href = "/auth/created"
      console.log(response)
      return response
    } catch (error: any) {
        console.log(error)
      return error.data;
    }
  };

  sendActivationEmail = async (email: string) => {
    try {
      const response = await api.post(activationRoute, { email });
      return response.data;
    } catch (error: any) {
      return error.data;
    }
  };
}

const newOrder = new Order();

export default newOrder;
