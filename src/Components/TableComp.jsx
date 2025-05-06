import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  TableContainer,
  Paper
} from "@mui/material";

export default function TableComp({ schedule = [], currency = "USD" }) {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Amortization Schedule ({currency})
      </Typography>

      <TableContainer
        component={Paper}
        
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          maxHeight: 500,
          maxWidth: 1200,
          overflow: "auto"
        }}
      >
        <Table stickyHeader>
          <TableHead >
            <TableRow>
              <TableCell align="left">Month</TableCell>
              <TableCell align="right">Principal</TableCell>
              <TableCell align="right">Interest</TableCell>
              <TableCell align="right">Remaining Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row) => (
              <TableRow key={row.month}>
                <TableCell >{row.month}</TableCell>
                <TableCell align="right">{row.principal} {currency}</TableCell>
                <TableCell align="right">{row.interest} {currency}</TableCell>
                <TableCell align="right">{row.balance} {currency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
