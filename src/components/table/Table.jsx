import * as React from "react";
import './table.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, TrackingId, Date, Status) {
  return { name, TrackingId, Date, Status };
}

const rows = [
  createData("Lasania Chiken Fri", 1389238, "2 March 2022", "Approved"),
  createData("Lasania Chiken Fri", 1389238, "2 March 2022", "Approved"),
  createData("Lasania Chiken Fri", 1389238, "2 March 2022", "Pending"),
  createData("Lasania Chiken Fri", 1389238, "2 March 2022", "Delivered"),
];

export default function BasicTable() {
  const makeStyles = (status) => {
    if (status === "Approved") {
      return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (status === "Pending") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } else if (status === "Delivered") {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };

  return (
    <div className="table" style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
      <h3>Recent Orders</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tranking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.TrackingId}</TableCell>
                <TableCell align="left">{row.Date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.Status)}>
                    {row.Status}
                  </span>
                </TableCell>
                <TableCell align="Details">Detail</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
