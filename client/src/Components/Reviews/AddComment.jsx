import React, { useState } from "react";
import {
  Box,
  TextareaAutosize,
  Button,
  CardActions,
  Hidden,
} from "@mui/material";

function AddComment({ addComment,closeClick }) {
  const [comment, setComment] = useState();

  return (
    <Hidden>
      <Box style={{background: "transparent ",}}>
        <TextareaAutosize autoFocus
          style={{ height: "200px", width: "500px",background: "transparent ", }}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <CardActions>
          <Button size="large" onClick={() => addComment(comment)}>
            Send comment
          </Button>
        </CardActions>
      </Box>
    </Hidden>
  );
}

export default AddComment;
/*hidden='none'*/
