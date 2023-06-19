import { FunctionComponent } from "react";
import { Badge, Button } from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import { useAppSelector } from "@app/store/store";
import { IFavorite } from "@shared/types/global";
import { setActualFavorite } from "@features/favorite";

export const FavoriteItem: FunctionComponent<{
  favorite: IFavorite;
}> = ({ favorite }) => {
  const actualFavorite = useAppSelector((state) => {
    return state.favorite.favorites[state.favorite.actualFavoriteId];
  });

  const onFavoriteClick = () => {
    setActualFavorite(favorite);
  };

  return (
    <Badge badgeContent={favorite.id} color="primary" key={favorite.id}>
      <Button
        sx={{
          minWidth: 1,
          bgcolor: favorite.id === actualFavorite.id ? "#cfcece" : "ffffff",
        }}
        onClick={onFavoriteClick}
      >
        <FavoriteIcon color="action" />
      </Button>
    </Badge>
  );
};
