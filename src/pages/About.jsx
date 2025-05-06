
import React from "react";
import { Box, Typography, Paper, Divider, Link, List, ListItem } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ p: 1, margin: "auto" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          About This Loan Calculator App
        </Typography>

        <Typography variant="body1" gutterBottom>
          This Loan Calculator is a modern, single-page web application that helps users calculate their monthly EMI (Equated Monthly Installment),
          visualize an amortization schedule, and convert EMI values into different currencies using real-time exchange rates.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6">Key Features</Typography>
        <List dense>
          <ListItem>📊 Loan EMI calculation using financial formulas</ListItem>
          <ListItem>📅 Dynamic amortization schedule with monthly breakdown</ListItem>
          <ListItem>💱 Real-time currency conversion of EMI using ExchangeRate API</ListItem>
          <ListItem>🌓 Light/Dark theme toggle with persistent state</ListItem>
          <ListItem>📱 Fully responsive UI with collapsible mobile navbar</ListItem>
          <ListItem>🚫 404 Not Found and Error Handling Pages</ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6">Technologies Used</Typography>
        <List dense>
          <ListItem>⚛️ React (Hooks, Routing, Context API)</ListItem>
          <ListItem>🎨 Material UI (MUI) for styling and theming</ListItem>
          <ListItem>🔗 Axios for API communication</ListItem>
          <ListItem>🌐 ExchangeRate-API for currency conversion</ListItem>
        </List>

 
      </Paper>
    </Box>
  );
};

export default About;
