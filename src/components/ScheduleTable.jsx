import React, { useContext } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  MenuItem,
  Select,
  Button,
  Stack,
} from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";


const TableSchedule = ({ loan, emi,setSubmitted }) => {

      const { currency, setCurrency } = useContext(GlobalContext);
    
  const months = loan.years * 12;
  let balance = +loan.amount;
  const r = +loan.rate / 100 / 12;

  const rows = Array.from({ length: months }, (_, i) => {
    const interest = balance * r;
    const principal = emi - interest;
    balance -= principal;
    return {
      month: i + 1,
      principal: principal.toFixed(2),
      interest: interest.toFixed(2),
      balance: balance > 0 ? balance.toFixed(2) : "0.00",
    };
  });

  return (
    <Paper sx={{ mt: 4 }}>
        <Stack direction={'row'} justifyContent={'space-between'}>


      <Select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        size="small"
        sx={{ ml: 2, bgcolor: 'inherit', color: "inherit" }}
        >
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="EUR">EUR</MenuItem>
        <MenuItem value="INR">INR</MenuItem>
        <MenuItem value="GBP">GBP</MenuItem>
        <MenuItem value="GBP">JPY</MenuItem>
        <MenuItem value="GBP">AUD</MenuItem>
        <MenuItem value="GBP">CAD</MenuItem>
      </Select>
      <Button variant='outlined'color='secondary' onClick={()=>setSubmitted(false)}  >RESET</Button>
          </Stack>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Remaining Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.month}>
              <TableCell>{r.month}</TableCell>
              <TableCell>{r.principal} {currency}</TableCell>
              <TableCell>{r.interest} {currency}</TableCell>
              <TableCell>{r.balance} {currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TableSchedule;
