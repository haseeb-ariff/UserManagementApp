import React  from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Custombutton from "../Components/Button.js"

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableContainerStyle = {
  overflowY: "auto",
  overflowX: "auto",
  display: "inline-block",
  width: "80%",
  margin: 50,
};

const tablestyle = {
  backgroundColor: "#9229ac",
  color: "white",
};

export default function CustomTable({ users, employeeType,deleteEmployee }) {
    

   
  let filteredUsers = null;
  if (employeeType === "User") {
    filteredUsers = users.filter((user) => user.role === 1);
  } else if (employeeType === "Senior User") {
    filteredUsers = users.filter((user) => user.role === 2);
  } else {
    filteredUsers = users.filter((user) => user.role === 3);
  }

  return (
    <TableContainer component={Paper} style={TableContainerStyle}>
      <Table style={{ width: "100%" }} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={tablestyle}>#</TableCell>
            <TableCell style={tablestyle} align="left">
              First Name
            </TableCell>
            <TableCell style={tablestyle} align="left">
              Last Name
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "#9229ac",
                color: "white",
                width: "20%",
              }}
              align="left"
            >
              Role
            </TableCell>
            <TableCell style={tablestyle} align="left">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((row, index) => (
            <StyledTableRow key={row.firstName}>
              <TableCell align="left">{++index}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">
                {row.role === 1
                  ? "User"
                  : row.role === 2
                  ? "Senior User"
                  : "WFM"}
              </TableCell>
              <TableCell align="left">{<Custombutton text={"Delete"} btnStyle={{backgroundColor: "#9229ac",color: "white",textTransform: "none",borderColor:"#9229ac",outline:"none"}} event={()=>{ deleteEmployee(row)}} ></Custombutton>}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
