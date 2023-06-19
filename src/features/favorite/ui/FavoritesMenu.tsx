import { useRef, useState } from "react";

import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Stack,
} from "@mui/material";

import { Add as AddIcon, Favorite as FavoriteIcon } from "@mui/icons-material";

import { useAppSelector } from "@app/store/store";

import { addFavorite } from "@features/favorite";
import { FavoriteItem } from "./FavoriteItem";

export const FavoritesMenu = () => {
  const favorites = useAppSelector((state) => state.favorite.favorites);

  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const onFavoriteAdd = () => {
    addFavorite();
  };

  return (
    <>
      <Button
        ref={anchor}
        id="composition-button"
        onClick={() => setOpen(true)}
      >
        <FavoriteIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchor.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <Stack
                  spacing={{ lg: 2 }}
                  sx={{ p: 2 }}
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                >
                  {favorites.map((fav) => (
                    <FavoriteItem favorite={fav} />
                  ))}
                  <Button
                    sx={{
                      minWidth: "10px",
                    }}
                    onClick={onFavoriteAdd}
                  >
                    <AddIcon color="action" />
                  </Button>
                </Stack>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
