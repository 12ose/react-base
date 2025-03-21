// src/hooks/useLogin.js

import { useCookies } from "react-cookie";
import apiClient from "../../utils/axiosConfig";

export function useSignup() {
  const [cookies, setCookie] = useCookies(["token", "user"]);

  const signupUser = async (values) => {
    try {
      // Fetch public key

      const response = await apiClient.post("/auth/register", {
        firstName: values.firstName,
        lastName: values.lastName,
        organisation: values.organization,
        email: values.email,
        phone: values.phone,
        password: values.password,
      });

      // const data = response.data;
      console.log("--->>", response);

      // const userData = {
      //   id: data.USER_ID,
      //   name: data.USER_NAME,
      //   role: data.USER_ROLE,
      //   expiresIn: data.EXPIRES_IN,
      // };

      // const expirySeconds = parseInt(data.EXPIRES_IN) || 7 * 86400;
      // const tokenExpiryDate = new Date(Date.now() + expirySeconds * 1000);

      // // Set cookies
      // setCookie("token", data.USER_ID, {
      //   expires: tokenExpiryDate,
      //   path: "/",
      //   secure: import.meta.env.PROD,
      //   sameSite: "strict",
      // });

      // setCookie("user", JSON.stringify(userData), {
      //   expires: tokenExpiryDate,
      //   path: "/",
      //   secure: import.meta.env.PROD,
      //   sameSite: "strict",
      // });

      // console.log("Login successful", userData);

      // return {
      //   success: true,
      //   user: userData,
      // };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error:
          error.response?.data?.message || error.message || "Signup failed",
      };
    }
  };

  return signupUser;
}
