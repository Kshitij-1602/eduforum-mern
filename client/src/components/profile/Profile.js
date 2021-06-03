import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from "@material-ui/icons/Edit";
import { Paper } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Sidebar from '../layout/Sidebar'


function Profile() {
  const [College, setCollege] = useState({
    name: 'EMPTY',
    email: 'EMPTY',
    branch: 'EMPTY'
  });
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState("");
  const [txtbox, setTxtbox] = useState("");
  var name = "EMPTY EMPTY", photoURL;

  const handleEditClick = (det) => {
    setOpen(true);
    setDetail(det);
  }
  const handleCloseClick = () => {
    setOpen(false);
    setDetail("");
  }
  const handleSubmitClick = () => {
    setOpen(false);
    setDetail("");
  }
  const handleTxtChange = (event) => {
    const { value } = event.target;
    setTxtbox(value);
  }

  return (
    // <div style={profileStyle}>
    <React.Fragment>
      <Sidebar />
      {/* <Paper style={{ height: "95%", margin: "15px" }}> */}
      <Paper className="content profile-style"> 
        <div style={profileHeader}>
          <Avatar alt="user image" style={avatarStyle} src={photoURL}>
            {/* N */}
          </Avatar>
          <div style={{ margin: "25px" }}>
            {/* <h2>User Name </h2> */}
            <h2>{name}</h2>
            <fieldset style={{ width: "700px",height: "200px",border: "1px solid black", padding: "8px" }}>
              <legend style={{ width: "auto", fontSize: "18px", margin: "8px" }}>
                Status
              </legend>
              EMPTY
            </fieldset>
          </div>
        </div>
        <div style={profileMain}>
          <h4>Email:</h4>
          <p style={profileText}>{College.email}</p>
          <IconButton style={{ margin: "10px" }} onClick={() => handleEditClick("email")}>
            <EditIcon style={{ margin: "8px" }} />
          </IconButton>
          <h4>University:</h4>
          <p style={profileText}>{College.name}</p>
          <IconButton style={{ margin: "10px" }} onClick={() => handleEditClick("name")}>
            <EditIcon style={{ margin: "8px" }} />
          </IconButton>
          <h4>Branch:</h4>
          <p style={profileText}>{College.branch}</p>
          <IconButton style={{ margin: "10px" }} onClick={() => handleEditClick("branch")}>
            <EditIcon style={{ margin: "8px" }} />
          </IconButton>
        </div>
      </Paper>
      <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleCloseClick} >
        <DialogTitle>Edit value for: {detail}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={detail}
            value={txtbox}
            onChange={handleTxtChange}
          // fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseClick} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitClick} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>    
    </React.Fragment>
  );
}

const profileStyle = {
  // background: '#f2f2f2'
  margin: "20px",
  height: "100%",
  // padding: '10px'
};

const profileHeader = {
  display: "flex",
  // marginLeft: '23%'
};

const avatarStyle = {
  margin: "15px",
  alignSelf: "center",
  backgroundColor: "orange",
  height: "150px",
  width: "150px",
};

const profileMain = {
  margin: "18px",
  marginLeft: "100px",
  // marginBottom: '50px'
  // marginLeft: '30%'
};

const profileText = {
  display: "inline-block",
  border: "1px solid black",
  padding: "8px",
  width: "600px",
  borderRadius: "5px",
};

export default Profile;
