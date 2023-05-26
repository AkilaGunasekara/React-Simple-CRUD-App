import { type } from "os";
import "./EmployeeListStyle.css";
import { IEmployee } from "./Employee";

import { useState } from "react";
import EmployeeModal from "./EmployeeModal";
import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  PaperProps,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import Draggable from 'react-draggable';

type Props = {
  list: IEmployee[];
  onDelete: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDelete, onEdit } = props;

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function PaperComponent(props: PaperProps) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
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
                <StyledTableCell align="right">
                  {employee.location}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {employee.email}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {employee.mobile}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Stack
                    sx={{ pt: 1 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                  >
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      <Button color="success" onClick={() => onView(employee)}>
                        View
                      </Button>
                      <Button onClick={() => onEdit(employee)}>Edit</Button>
                     

                      <Button variant="outlined" color="error" onClick={handleClickOpen}>
                      Delete
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        PaperComponent={PaperComponent}
                        aria-labelledby="draggable-dialog-title"
                      >
                        <DialogTitle
                          style={{ cursor: "move" }}
                          id="draggable-dialog-title"
                        >
                          Delete Confirmation
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                          Are you sure you want to delete the selected file?
                            This action is permanent and cannot be undone.
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus onClick={handleClose}>
                            Cancel
                          </Button>
                          <Button onClick={() => {
                            handleClose();
                            onDelete(employee);
                            }}>
                            Delete
                            </Button>
                        </DialogActions>
                      </Dialog>
                    </ButtonGroup>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default EmployeeList;
