import React from "react";
import { CardMedia, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { width } from "@mui/system";
import axios from "axios";
import { useQuery } from "react-query";

function BoxTop() {
  let fetchdog = async () => {
    const { data } = await axios.get(
      "https://dog.ceo/api/breeds/image/random/6"
    );
    return data;
  };
  fetchdog();
  const { data, error, isError, isLoading } = useQuery("dog", fetchdog);
  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading</div>;
  }
  let array: string[] = data.message;
  let hehe = array.map((item: string) => {
    return (
      
        <Container >
            
          <Card sx={{ bgcolor: "#cfe8fc", height: "100px", width: "90px" }}>
            <CardMedia>
              <img src={item} height='100' width = '90' alt="dog" />
            </CardMedia>
          </Card>
            
        </Container>
      
    );
  });
    return <div className = 'Box-Top'>{hehe}</div>;

}

export default BoxTop;
