// TODO: create types folder
type Post = {
  id: string;
  name: string;
  content: string;
  selected?: boolean;
};

export async function getPosts(): Promise<Post[]> {
  // TODO: use const res = await fetch("/api/posts");
  const res = await fetch("http://localhost:3000/api/posts");
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
