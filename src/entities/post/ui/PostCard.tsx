import { FunctionComponent } from "react";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { MoreHoriz as MoreHorizIcon } from "@mui/icons-material";
import { red } from "@mui/material/colors";

import { IPost } from "@shared/types/global";
import { IPostAction } from "@shared/types/postCard";

export const PostCard: FunctionComponent<{ actions: any; post: IPost }> = ({
  actions,
  post,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 500,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={post.url}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={post.title}
        subheader="September 14, 2016"
        sx={{ flexGrow: 1 }}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.url}
        alt="Paella dish"
        sx={{ flexGrow: 1, maxHeight: 240 }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "300px",
            height: "1.2em",
            whiteSpace: "nowrap",
          }}
        >
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {actions.map((Act: FunctionComponent<IPostAction>, index: number) => (
          <Act post={post} key={index} />
        ))}
      </CardActions>
    </Card>
  );
};
