import React, { useState, useContext } from "react";
import { Box, Container, Typography } from "@mui/material";
import Calculator from "../components/Calculator";
import EMIResult from "../components/EMIResult";
import TableSchedule from "../components/ScheduleTable";
import { useEMICalculator } from "../hooks/useEMICalculator";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
  const [loan, setLoan] = useState({ amount: 100000, rate: 8.5, years: 5 });
  const [submitted, setSubmitted] = useState(false);
  const emi = useEMICalculator(+loan.amount, +loan.rate, +loan.years);
  const { currency } = useContext(GlobalContext);

  return (
    <Container sx={{mt:2}}>
      <Typography variant="h4" gutterBottom>
        Loan Calculator Dashboard
      </Typography>
      <Calculator loan={loan} setLoan={setLoan} setSubmitted={setSubmitted} />
      {submitted && (
        <>
          <EMIResult emi={emi} />
          <TableSchedule loan={loan} emi={emi} setSubmitted={setSubmitted} />
        </>
      )}
    </Container>
  );
};

export default Home;
