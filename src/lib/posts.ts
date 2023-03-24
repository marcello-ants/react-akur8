import axios from "axios";
import { Post } from "@/types";

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get("/api/posts");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
