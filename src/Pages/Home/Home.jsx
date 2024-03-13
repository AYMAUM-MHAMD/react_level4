import { Box, Paper, IconButton } from "@mui/material";
import "./Home.css";
import Typography from "@mui/material/Typography";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Home = () => {
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3200/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, [mydata]);

  const handelDlete = (item) => {
    fetch(`http://localhost:3200/mydata/${item.id}`, { method: "DELETE" });

    const newArr = mydata.filter((myObject) => {
      return myObject.id !== item.id;
    });

    setmydata(newArr);
  };

  let totalPrice = 0;
  return (
    <Box>
      {mydata.map((item) => {
        totalPrice += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontSize: "1.4em",
                fontWeight: 500,
                opacity: "0.8",
              }}
              variant="h6"
            >
              ${item.price}
            </Typography>

            <IconButton
              onClick={() => {
                handelDlete(item);
              }}
              sx={{ position: "absolute", top: "0px", right: "0px" }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography mt="55px" textAlign="center" variant="h5">
        👉 You Spend ${totalPrice}
      </Typography>
    </Box>
  );
};

export default Home;
