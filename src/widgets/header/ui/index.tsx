import { FunctionComponent } from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { FavoritesMenu } from "@features/favorite";

export const Header: FunctionComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <FavoritesMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
