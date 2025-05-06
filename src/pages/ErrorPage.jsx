import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 3,
      }}
    >

      <Typography variant="h4" gutterBottom>
      Something went wrong in the application.
      </Typography>
     
      <Button variant="outlined" color="primary" onClick={() => navigate("/")}>
        Go  Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
