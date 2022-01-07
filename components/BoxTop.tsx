import React from "react";
import { CardMedia, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { width } from "@mui/system";
import axios from "axios";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import Aos from "aos";

function BoxTop() {
  useEffect(() => {
    Aos.init();
  }, []);
  let fetchdog = async () => {
    const { data } = await axios.get("http://localhost:1337/api/hotnows");
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
  let array: any[] = data.data;
  let hehe = array.map((item: any) => {
    return (
      <div data-aos="fade-up">
      <Card sx={{ bgcolor: "#cfe8fc", height: "420px", width: "200px" }}>
        <CardMedia>
          <img src={item.attributes.image} height="300" width="200" alt="dog" />
        </CardMedia>
        <CardContent>
          <Typography variant="h6" component="h2" color="#000">
            {item.attributes.Name}
          </Typography>
        </CardContent>
      </Card>
      </div>
    );
  });
  return (
    //TODO fix this error
    <div className="Box-Top">{hehe}
    <div className="Sidebar">
    <Sidebar />
    </div>
    </div>
    

  )
}

export default BoxTop;
