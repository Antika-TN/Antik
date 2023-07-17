import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CardMedia,
  Card,
  CardContent,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Comments from "./Coments";
import AddComment from "./AddComment";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  padding: "2px",
  height: "10px",
  width: "300px",
  paddingRight: "10px",
  borderRadius: "80px",
});

export default function ProductDetails() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [idClient,SetIdClient]=React.useState('')
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/reviews/1")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
      fares()
  }, [data]);
  const addComment = (comment) => {
    axios
      .post(`http://localhost:3000/reviews/${idClient}/1`, {
        comment: comment,
        rating: value,
      })
      .then(() => alert("done"))
      .catch((err) => console.log(err));
  };
  const openClick = () => {
    setShow(true);
  };
  const closeClick = () => {
    setShow(false);
  };
  function fares(){
    const token = Cookies.get("token");
    if (token){
      const decodedToken = jwtDecode(token);
      SetIdClient(decodedToken.id)
    }

  }
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      <Box sx={{ display: "grid", gridTemplateRows: 'repeat(1, 1fr)',position:'fixed', background: "var(--white-10, rgba(255, 255, 255, 0.10))" ,paddingBottom:'20%',margin:'10px',borderRadius:'8px' }}>
        <Box sx={{ gridRow: "1",  }}>
          <Card sx={{ maxWidth: 345 }} style={{margin:"20px" }}>
            <CardMedia
              component="img"
              alt="image of prodact"
              height="140"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{gridRow: "2", gridColumn: "1 " }}>
          <Button
            variant="contained"
             size="medium"
            onClick={openClick}
            style={{ marginLeft: "20px", width:"90%" }}
          >
            Add new Comment
          </Button>
        </Box>
        <Box
          sx={{
            "& > legend": { mt: 2 },
           
            margin: "20px",
            borderRadius: "8px",
            width: "300px",
            gridRow: "3",
            gridColumn: "1",
            border:'solid 2px rgba(255, 255, 255, 1)'
          }}
        >
          <Typography
            component="legend"
            style={{
              fontSize: "26px",
              border:'transparent',
              color:'white'
            }}
          >
            Rate this product
          </Typography>
          <StyledRating
            name="customized-color"
            defaultValue={1}
            getLabelText={(value) => `Heart${value !== 1 ? "s" : ""}`}
            onChange={(e) => setValue(e.target.value)}
            precision={1}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            style={{
              fontSize: "35px"
            }}
          />
        </Box>
      </Box>
      <Box sx={{ gridRow: "1", gridColumn: "2/4 " }}>
        <Box sx={{ marginTop: "90px" }}>
          {data.map((e) => (
            <Comments key={e.id} el={e} />
          ))}
        </Box>
        <Dialog
          open={show}
          onClose={closeClick}
          style={{ background: "var(--white-10, rgba(255, 255, 255, 0.10))" }}
        >
          <DialogTitle style={{ background: "transparent" }}>
            Add your comment
          </DialogTitle>
          <DialogContent style={{ background: "transparent" }}>
            <DialogContentText style={{ background: "transparent" }}>
              Here you can add your comment about this product
            </DialogContentText>
            <Box style={{ background: "transparent" }}>
              <AddComment addComment={addComment} />
            </Box>
          </DialogContent>
          <DialogActions style={{ background: "transparent" }}>
            <Button onClick={closeClick}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}
