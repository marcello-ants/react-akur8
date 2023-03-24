import { Post } from "@/types";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts data");
  }
  const data = await res.json();

  return new Promise((resolve) => {
    // Simulate a delay of 1 second to simulate a real network request
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
