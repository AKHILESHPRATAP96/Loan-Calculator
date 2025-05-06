import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";

const EMIResult = ({ emi }) => {
  const { currency } = useContext(GlobalContext);
  return (
    <Typography variant="h6" mt={2}>
      Monthly EMI: $ {emi} 
    </Typography>
  );
};

export default EMIResult;
