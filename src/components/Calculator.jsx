import React from "react";
import { Box, TextField, Button, Grid } from "@mui/material";

const Calculator = ({ loan, setLoan, setSubmitted }) => {
  const handleChange = (e) => {
    setLoan({ ...loan, [e.target.name]: e.target.value });
  };

  return (
    <Grid container spacing={1}>
      <Grid size={3}>
        <TextField
          label="Loan Amount"
          name="amount"
          value={loan.amount}
          onChange={handleChange}
        />
      </Grid>
      <Grid size={3}>
        <TextField
          label="Interest Rate (%)"
          name="rate"
          value={loan.rate}
          onChange={handleChange}
        />
      </Grid>
      <Grid size={3}>
        <TextField
          label="Term (Years)"
          name="years"
          value={loan.years}
          onChange={handleChange}
        />
      </Grid>
      <Grid size={4}>
        <Button
          variant="contained"
          sx={{ my: 1 }}
          onClick={() => setSubmitted(true)}
        >
          Calculate
        </Button>
      </Grid>
    </Grid>
  );
};

export default Calculator;
