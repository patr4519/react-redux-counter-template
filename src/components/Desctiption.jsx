import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { editDesctiption } from "../redux/slices/todoSlice";

export default function AlertDialog({ description, todoTitle }) {
  const [open, setOpen] = React.useState(false);
  const [editField, setEditField] = React.useState(false);
  const [inputField, setInputField] = React.useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveEdit = () => {
    dispatch(editDesctiption({ todoTitle, inputField }));
    setEditField(prev => !prev)
    setInputField("");
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Description
      </Button>
      <Dialog
        sx={{
          ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            width: "500px",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{todoTitle}</DialogTitle>
        {editField && (
          <textarea
            className="textArea"
            onChange={(e) => setInputField(e.target.value)}
            defaultValue=""
          ></textarea>
        )}
        {inputField.length > 0 && (
          <Button onClick={saveEdit}>
            Save edit
          </Button>
        )}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditField((prev) => !prev)} autoFocus>
            Edit
          </Button>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
