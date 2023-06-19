import { IPost } from "@shared/types/global";
import axios from "axios";

export const getPosts = async () => {
  const postsWithNoImage = await axios.get<IPost[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const images = await axios.get(
    "https://jsonplaceholder.typicode.com/photos?_limit=10"
  );

  return postsWithNoImage.data.map((post, index: number) => ({
    ...post,
    url: images.data[index].url,
  }));
};
