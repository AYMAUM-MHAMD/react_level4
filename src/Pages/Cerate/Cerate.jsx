import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Cerate.css";
import { NavigateNext } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ColorButton = styled(Button)(({ theme }) => ({
  // @ts-ignore
  color: theme.palette.getContrastText(theme.palette.ali.main),
  // @ts-ignore
  backgroundColor: theme.palette.ali.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.ali.hover,
    scale: "0.95",
  },
}));

const Cerate = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ title, price }) => {

    price = Number(price);
    fetch("http://localhost:3200/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price }),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      sx={{ width: "380px" }}
      component="form"
    >
      <TextField
        fullWidth={true}
        label="Transaction Title"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start"> &#128073;</InputAdornment>
          ),
        }}
        variant="filled"
        {...register("title", {
          required: { value: true, message: "Requires field" },
          minLength: { value: 3, message: "minumn length is 3" },
        })}
        error={Boolean(errors.title)}
        helperText={
          Boolean(errors.title) ? errors.title?.message.toString() : null
        }
      />

      <TextField
        fullWidth={true}
        label="Amount"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
        type="number"
        {...register("price", { required: { value: true, message: "Requires field" } })}
        error={Boolean(errors.price)}
        helperText={
        Boolean(errors.price) ? errors.title?.message.toString() : null
        }
      />

      <ColorButton type="submit" sx={{ mt: "22px" }} variant="contained">
        Submit <NavigateNext />
      </ColorButton>
    </Box>
  );
};

export default Cerate;
