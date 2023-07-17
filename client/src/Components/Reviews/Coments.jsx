import React, { useState } from "react";
import { Box, Input, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { Button } from "@mui/joy";

function Comments({ el }) {
  const [update, setUpdate] = useState("");
  if (!el || !el.id) {
    return null;
  }
  const modify = () => {
    axios
      .put("http://localhost:3000/reviews/1", { comment: update })
      .then(() => alert("the coment are update"))
      .catch((err) => console.log(err));
  };
  return (
    <Box>
      <Card
        style={{
          width: "90%",
          backgroundColor: "transparent",
          borderRadius: "10px",
          background: "var(--white-10, rgba(255, 255, 255, 0.10))",
          boxShadow: "0px 0px 20px 0px rgba (0,0,0,0.15)",
          margin: "10px",
          border:'green'
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" color={"white"}>
            {el.Client.firstName} {el.Client.lastName}
          </Typography>
          <Typography
            style={{ fontFamily: "Poppins", color: "#FFF", fontSize: "20px" }}
          >
            {el.comment}
          </Typography>
        </CardContent>
      </Card>
      {/* <Input 
    onChange={e=>setUpdate(e.target.value)}
    value={update}/>
    <Button 
    onClick={()=>modify()} 
    >Update</Button> */}
    </Box>
  );
}

export default Comments;
