import { type } from "os";
import "./EmployeeListStyle.css";
import { IEmployee } from "./Employee";

import { useState } from "react";
import EmployeeModal from "./EmployeeModal";
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from "@mui/material";


type Props = {
    list: IEmployee[]
    onDelete: (data: IEmployee) => void;
    onEdit: (data: IEmployee) => void;
}

const EmployeeList = (props : Props) => {

    const {list,onDelete,onEdit} = props;

    const onDeleteClickHnd = (data: IEmployee) => {
        onDelete(data);
    };

    const [showModal, setShowModal] = useState(false); 

    const [dataToShow, setDataToShow] = useState<IEmployee | null>(null);

    const onView = (data: IEmployee) => {
        setShowModal(true);
        setDataToShow(data);
    };

    const onCloseModal = () => {
        setShowModal(false);
    };

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
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));



    return (
        <div>
            <h3>Interns List</h3>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Mobile</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {list.map((employee) => (
            <StyledTableRow key={employee.id}>
              <StyledTableCell component="th" scope="row">
              {`${employee.firstname} ${employee.lastname}`}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.location}</StyledTableCell>
              <StyledTableCell align="right">{employee.email}</StyledTableCell>
              <StyledTableCell align="right">{employee.mobile}</StyledTableCell>
              <StyledTableCell align="right">
              <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={() => onView(employee)}>View</Button>
              <Button variant="contained" onClick={() => onEdit(employee)}>Edit</Button>
              <Button variant="contained" onClick={() => onDelete(employee)}>Delete</Button>
        
            </Stack>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  {showModal && dataToShow !== null && 
  <EmployeeModal onClose={onCloseModal} data={dataToShow}/>}


        </div>
    );
}
export default EmployeeList;