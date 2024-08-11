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
  Select,
  MenuItem,
  InputLabel,
  NativeSelect,
  InputBase,
} from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputGroup from "react-bootstrap/InputGroup";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuid } from "uuid";
import AddedBillMedList from "./AddedBillMedList";
import PostCustomerData,{ GetCustomerData } from "./Api/AddBillApiService.js";
import AddBillHeader from "./AddBillHeader.js";


//import apiService from "./Api/AddBillApiService";
//const { getCustomerData, postCustomerData } = apiService;

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(5),
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const AddBill = () => {
  const log = "Add Bill Componenet ";
  const [addBillForm, setBillForm] = useState({
    customerName: "Aniket","age":28,"mobileNo":9503764343,
    medicine: [{}],
  });
  const [addBillMed, setBillMed] = useState({});
  const [addBillMedList, setBillMedList] = useState(
    [{"id":"52269934-7e4e-44b8-9459-e673dca19d89","medicineName":"Azithromycin","medicinePrice":"123","medicineDisc":"23"},{"id":"c17a79b5-a3e0-49ec-ab67-5980f3a84fe2","medicineName":"Cefixime","medicinePrice":"123","medicineDisc":"23"}]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    addBillForm.medicine = addBillMedList;
    setBillForm(addBillForm);
    console.log(log + JSON.stringify(addBillForm));

    const data = postCustData(addBillForm);
    console.log("Posted data:", data);
    toast.success("Bill added to data store!", { autoClose: 4000 });

  };

  const postCustData = async (customerData) => {
    try {
      const data = PostCustomerData(addBillForm);
      return data;
    } catch (err) {
      console.error("Error posting data:", err);
    }
  };
  //onChange={(e) => setBillForm({ mobileNo: e.target.value })}
  const handleChange = (e) => {
    debugger;

    const { name, value } = e.target;
    setBillForm({ ...addBillForm, [name]: value });
    console.log(log + "" + JSON.stringify(addBillForm));
  };

  const handleMedListChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setBillMed({ ...addBillMed, [name]: value });
    console.log(log + " handleMedListChange " + JSON.stringify(addBillMed));
  };

  const isFiledEmpty = (field) => {
    return field === null || field === undefined || field === "";
  };

  const addBillInList = () => {
    if (isFiledEmpty(addBillMed.medicineName)) {
      toast("Please enter medicine name!");
      return;
    }
    if (isFiledEmpty(addBillMed.medicinePrice)) {
      toast("Please enter medicine price!");
      return;
    }
    if (isFiledEmpty(addBillMed.medicineDisc)) {
      toast("Please enter medicine discount!");
      return;
    }
    debugger;
    const isBillExists = addBillMedList.filter(
      (element) => element.medicineName === addBillMed.medicineName
    );
    if (isBillExists.length !== 0) {
      let rowEle = document.getElementById(isBillExists[0].id);
      rowEle.style.color = "green";
      rowEle.style.backgroundColor = "green";

      setTimeout(() => {
        rowEle.style.backgroundColor = "white";
      }, 3000);

      toast(
        "The medicine details already added in list! " + addBillMed.medicineName
      );
      return;
    }
    let tempList = [...addBillMedList];
    console.log(log + " addBillInList " + JSON.stringify(addBillMed));
    const uid = uuid();
    setBillMedList([...tempList, { id: uid, ...addBillMed }]);
    setBillMed({ medicineName: "", medicinePrice: "", medicineDisc: "" });

    console.log(log + " after addBillInList " + JSON.stringify(addBillMedList));
  };

  const removeMedItemHandler = (id) => {
    console.log(log + " removeMedItemHandler " + id);
    const copyMedList = addBillMedList.filter((medicine) => {
      return medicine.id !== id;
    });
    setBillMedList(copyMedList);
  };
  const deleteMedItem = (id) => {
    const copyMedList = addBillMedList.filter((medicine) => {
      return medicine.id !== id;
    });
    setBillMedList(copyMedList);
  };

  return (
    <>
    
      
      <ToastContainer />
      {/*JSON.stringify(addBillMedList)*/}
      <StyledContainer maxWidth="lg">
        <Typography variant="h4" component="h3" gutterBottom>
          Medical Store Generate Bill
        </Typography>
        <div
          style={{ width: "100%", justifyContent: "center", marginLeft: "10%" }}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <Stack spacing={2} direction="row">
              <InputGroup className="mb-3">
                <TextField
                  name="customerName"
                  id="customerName"
                  label="Enter Customer Name"
                  variant="outlined"
                  margin="normal"
                  required
                  value={addBillForm.customerName}
                  onChange={handleChange}
                  padding={"10px"}
                />
                &nbsp;&nbsp;
                <TextField
                  name="mobileNo"
                  id="mobileNo"
                  label="Enter Mobile No"
                  variant="outlined"
                  margin="normal"
                  required
                  value={addBillForm.mobileNo}
                  onChange={handleChange}
                />
                &nbsp;&nbsp;
                <TextField
                  name="age"
                  id="age"
                  label="Enter Age"
                  variant="outlined"
                  margin="normal"
                  required
                  value={addBillForm.age}
                  onChange={handleChange}
                />
              </InputGroup>
            </Stack>

            <Stack spacing={2} direction="row">
              <InputGroup className="mb-3">
                <Select
                  id="medicineName"
                  name="medicineName"
                  value={addBillMed.medicineSelect}
                  label="Select Medicine"
                  onChange={handleMedListChange}
                >
                  <MenuItem value={"Azithromycin"}>Azithromycin</MenuItem>
                  <MenuItem value={"Cefixime"}>Cefixime</MenuItem>
                  <MenuItem value={"Ciprofloxacin"}>Ciprofloxacin</MenuItem>
                </Select>
                <NativeSelect
                  style={{ display: "none" }}
                  id="demo-customized-select-native"
                  value={addBillMed.medicineSelect}
                  onChange={handleMedListChange}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                &nbsp;&nbsp;
                <TextField
                  name="medicinePrice"
                  id="medicinePrice"
                  label="Enter Price"
                  variant="outlined"
                  margin="normal"
                  value={addBillMed.medicinePrice}
                  onChange={handleMedListChange}
                />
                &nbsp;&nbsp;
                <TextField
                  name="medicineDisc"
                  id="medicineDisc"
                  label="Enter Discount"
                  variant="outlined"
                  margin="normal"
                  value={addBillMed.medicineDisc}
                  onChange={handleMedListChange}
                />
              </InputGroup>
              <Button
                variant="contained"
                alignitems={"center"}
                type="button"
                onClick={() => addBillInList()}
              >
                <AddIcon />
              </Button>
            </Stack>

            <Box sx={{ position: "relative", mt: 3 }}>
              <Button variant="contained" alignitems={"center"} type="submit">
                Submit
              </Button>
            </Box>

            <br />
            <AddedBillMedList
              removeMedItemHandler={removeMedItemHandler}
              addBillMedList={addBillMedList}
            />
          </form>
        </div>
      </StyledContainer>
    </>
  );
};

export default AddBill;
