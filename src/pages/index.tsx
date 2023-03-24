import React, { useRef, useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getPosts } from "@/lib/posts";
import { Post, Event } from "@/types";
import CreatePost from "@/components/CreatePost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostsList from "@/components/PostList";
import PostDetailList from "@/components/PostDetailList";
import PostEventList from "@/components/PostEventList";

type Props = {
  fetchedPosts: Post[];
};

type Refs = { [key: string]: React.RefObject<HTMLLIElement> };

const Home = ({ fetchedPosts }: Props) => {
  const [posts, setPosts] = useState<Post[]>(fetchedPosts);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchText, setSearchText] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  const refs = useRef<Refs>(
    posts.reduce((acc: Refs, value) => {
      acc[value.id] = React.createRef<HTMLLIElement>();
      return acc;
    }, {})
  );

  const updateRefs = (newPost: Post) => {
    refs.current[newPost.id] = React.createRef<HTMLLIElement>();
  };

  const filterPosts = (posts: Post[], searchText: string) => {
    return posts.filter((post) =>
      post.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPosts = filterPosts(posts, searchText);

  const handlePostSelection = (post: Post) => {
    setSelectedPost(post);
    refs.current[post.id].current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
  };

  const handleAddPost = (newPost: Post) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
    updateRefs(newPost);

    handleAddEvent(newPost.name, "created", new Date());
  };

  const handlePostRemoved = (post: Post) => {
    setPosts((prevPosts) => prevPosts.filter((p) => p.id !== post.id));
  };

  const handleAddEvent = (
    name: string,
    type: "created" | "removed",
    date: Date
  ) => {
    setEvents((prevEvents) => [...prevEvents, { name, type, date }]);
  };

  return (
    <>
      <Head>
        <title>FE Test - Akur8</title>
        <meta name="description" content="Made by Marcello Antunes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <Header />
        <main className="main">
          <div className="left-column">
            <PostsList
              posts={filteredPosts ? filteredPosts : posts}
              selectedPost={selectedPost}
              onPostSelected={handlePostSelection}
              onSearchTextChange={handleSearchTextChange}
            />
          </div>
          <div className="content">
            <CreatePost onAddPost={handleAddPost} />
            <PostDetailList
              refs={refs.current}
              posts={filteredPosts ? filteredPosts : posts}
              selectedPost={selectedPost}
              onPostSelected={handlePostSelection}
              onPostRemoved={handlePostRemoved}
              onAddEvent={handleAddEvent}
            />
          </div>
          <div className="right-column">
            <PostEventList events={events} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const fetchedPosts = await getPosts();

  return {
    props: { fetchedPosts },
  };
};

export default Home;
