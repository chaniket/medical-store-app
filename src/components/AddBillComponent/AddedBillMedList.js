import React from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
  Stack,
  styled,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TableCell,
  tableCellClasses,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AddedBillMedList = (props) => {
  const log = "AddedBillMedList component ";

  const addBillMedList = props.addBillMedList;

  const deleteMedItem = (id) => {
    console.log(log + " deleteMedItem " + id);
    props.removeMedItemHandler(id);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ minWidth: 500, maxWidth: "90%" }}>
        <Table aria-label="customized table" style={{ overflow: "scroll" }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Medicine Name1</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Discount</StyledTableCell>
              <StyledTableCell align="right">Remove</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addBillMedList.map((row, index) => (
              <StyledTableRow key={row.id} tabIndex={row.id} id={row.id}>
                <StyledTableCell align="right">{index + 1}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.medicineName}
                </StyledTableCell>

                <StyledTableCell component="th" scope="row">
                  {row.medicinePrice}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.medicineDisc}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="info"
                    onClick={(element) => deleteMedItem(row.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AddedBillMedList;
