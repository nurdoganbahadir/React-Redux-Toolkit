import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/haberSlice";
import { useEffect } from "react";
import loadingGif from "../assets/loading.gif";

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const { haberler, loading } = useSelector((state) => state.haberSlice);
  console.log(haberler);
  return (
    <>
      {loading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          {" "}
          <img src={loadingGif} alt="" />
        </Box>
      ) : (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {haberler.map((a, index) => (
            <Card key={index} sx={{ maxWidth: 345, maxHeight: 600, m: 5 }}>
              <CardMedia component="img" image={a.urlToImage} height="250" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {a.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {a.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">CLEAR</Button>
                <Button size="small" href={a.url} target="_blank">
                  DETAIL
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
