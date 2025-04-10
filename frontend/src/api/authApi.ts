import axiosInstance from "./axiosInstance"; // Pre-configured Axios instance
import { AuthResponse } from "../types"; // Type definition for expected response

// Function to register a new user
export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  // Send a POST request to the /auth/register endpoint with user credentials
  const { data } = await axiosInstance.post("/auth/register", {
    name,
    email,
    password,
  });

  // Return the server's response (usually includes user data and token)
  return data;
};

// Function to log in an existing user
export const loginUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  // Send a POST request to the /auth/login endpoint with email and password
  const { data } = await axiosInstance.post("/auth/login", { email, password });

  // Return the server's response (typically includes a token and user info)
  return data;
};

// Function to get the currently authenticated user's data
export const getMe = async (): Promise<AuthResponse> => {
  // Send a GET request to the /auth/me endpoint to retrieve user data
  const { data } = await axiosInstance.get("/auth/me");

  // Return the authenticated user's data
  return data;
};
