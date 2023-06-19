import { useLayoutEffect } from "react";
import { useState } from "react";

import { Container, Grid } from "@mui/material";

import { IPost } from "@shared/types/global";

import { Header } from "@widgets/header";

import { LikePost } from "@features/favorite";

import { PostCard } from "@entities/post";
import { getPosts } from "@entities/post";

export const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>();

  useLayoutEffect(() => {
    const fetchData = async () => {
      const result = await getPosts();
      setPosts(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Grid container spacing={2}>
          {posts?.map((post) => (
            <Grid item lg={4} key={post.id}>
              <PostCard post={post} actions={[LikePost]} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
