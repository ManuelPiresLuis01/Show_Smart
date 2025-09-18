import api from "../api.ts";
import { created } from "../routes/frontRoutes/front.routes.ts";
import {registrationRoute,activationRoute,} from "../routes/apiRoutes/auth.route.ts";
import type { user } from "../types/auth.types.ts";

class Order {
  Registry = async (user: user) => {
    try {
      const response = await api.post(registrationRoute, user);
      this.sendActivationEmail(user.email);
      window.location.href = created;
      return response;
    } catch (error: any) {
      console.error(error);
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
