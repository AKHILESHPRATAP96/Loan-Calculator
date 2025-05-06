import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import useExchangeRates from "../hooks/useExchangeRates";
import { GlobalContext } from "../context/GlobalContext";

const ExchangeRates = () => {
  const { currency } = useContext(GlobalContext);
  const apiKey = "API-KEY"; 
  const { rates, loading, error } = useExchangeRates(currency, apiKey);

  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const currencies = Object.entries(rates);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedData = currencies.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Live Exchange Rates (Base: {currency})
      </Typography>

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Currency</TableCell>
                  <TableCell align="right">Conversion Rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map(([code, rate]) => (
                  <TableRow key={code}>
                    <TableCell>{code}</TableCell>
                    <TableCell align="right">{rate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Pagination
            count={Math.ceil(currencies.length / rowsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            sx={{ mt: 2, display: "flex", justifyContent: "center" }}
          />
        </>
      )}
    </Box>
  );
};

export default ExchangeRates;
