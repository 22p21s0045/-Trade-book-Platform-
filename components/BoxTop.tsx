import React from "react";
import { CardMedia, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { width } from "@mui/system";
import axios from "axios";
import { useQuery } from "react-query";
import Grid from '@mui/material/Grid';
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
      
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item xs={12} sm={6} md={4}>
      
        <Card sx={{ bgcolor: "#cfe8fc", height: "300px", width: "200px" }}>
          <CardMedia>
            <img src={item} height="300" width="200" alt="dog" />
          </CardMedia>
        </Card>
      
      </Grid>
      
      
    );
  });
  return <div className="Box-Top">{hehe}</div>;
}

export default BoxTop;
