import type { NextApiRequest, NextApiResponse } from "next";

// TODO: add types folder
type Post = {
  id: string;
  name: string;
  content: string;
  selected?: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const posts: Post[] = [
    {
      id: "0",
      name: "My first post",
      content: "Post text to display",
      selected: true,
    },
    {
      id: "1",
      name: "My second post",
      content: "Post text to display",
    },
    {
      id: "2",
      name: "A little bit of sunshine ?",
      content:
        "Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar. Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar.",
    },

    {
      id: "3",
      name: "My first post",
      content: "Post text to display",
      selected: false,
    },
    {
      id: "4",
      name: "My second post",
      content: "Post text to display",
    },
    {
      id: "5",
      name: "A little bit of sunshine ?",
      content:
        "Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar. Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar.",
    },

    {
      id: "6",
      name: "My first post",
      content: "Post text to display",
      selected: false,
    },
    {
      id: "7",
      name: "My second post",
      content: "Post text to display",
    },
    {
      id: "8",
      name: "A little bit of sunshine ?",
      content:
        "Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar. Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar.",
    },
    {
      id: "9",
      name: "My first post",
      content: "Post text to display",
      selected: false,
    },
    {
      id: "10",
      name: "My second post",
      content: "Post text to display",
    },
    {
      id: "11",
      name: "A little bit of sunshine ?",
      content:
        "Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar. Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar.",
    },

    {
      id: "12",
      name: "My first post",
      content: "Post text to display",
      selected: false,
    },
    {
      id: "13",
      name: "My second post",
      content: "Post text to display",
    },
    {
      id: "14",
      name: "A little bit of sunshine ?",
      content:
        "Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar. Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar.",
    },

    {
      id: "15",
      name: "My first post",
      content: "Post text to display",
      selected: false,
    },
    {
      id: "16",
      name: "My second post",
      content: "Post text to display",
    },
    {
      id: "17",
      name: "A little bit of sunshine ?",
      content:
        "Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar. Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar.",
    },
    {
      id: "18",
      name: "My first post",
      content: "Post text to display",
      selected: false,
    },
    {
      id: "19",
      name: "My second post",
      content: "Post text to display",
    },
    {
      id: "20",
      name: "A little bit of sunshine ?",
      content:
        "Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar. Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar.",
    },

    {
      id: "21",
      name: "My first post",
      content: "Post text to display",
      selected: false,
    },
    {
      id: "22",
      name: "My second post",
      content: "Post text to display",
    },
    {
      id: "23",
      name: "A little bit of sunshine ?",
      content:
        "Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar. Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar.",
    },

    {
      id: "24",
      name: "My first post",
      content: "Post text to display",
      selected: false,
    },
    {
      id: "25",
      name: "My second post",
      content: "Post text to display",
    },
    {
      id: "26",
      name: "A little bit of sunshine ?",
      content:
        "Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar. Post text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar Post1 text to display is very long text content and we should really handle that with a vertical scrollbar.",
    },
  ];

  res.status(200).json(posts);
}
