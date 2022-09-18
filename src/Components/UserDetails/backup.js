import React , { useState }from "react";
import { useLocation } from "react-router-dom";
// import {
//   Box, Button, Snackbar, Table,
//   TableBody, TableCell, TableHead, TableRow
// } from "@material-ui/core";

export default function UserDetailsPage(data){
const userDetails = JSON.parse(localStorage.getItem('data'));
  console.log("@@@@@@@@",userDetails);
//   const [isEdit, setEdit] = React.useState(false);

  const [rows, setRows] = useState([
    { id: 1, name: userDetails.name, email: userDetails.email },
]);
const [open, setOpen] = React.useState(false);
	const [isEdit, setEdit] = React.useState(false);
	const [disable, setDisable] = React.useState(true);
	const [showConfirm, setShowConfirm] = React.useState(false);
  // Function to handle edit
	const handleEdit = (i) => {
		// If edit mode is true setEdit will
		// set it to false and vice versa
		setEdit(!isEdit);
	};

    // Function For adding new row object
	const handleAdd = () => {
		setRows([
			...rows,
			{
				id: rows.length + 1, name: "",
				email: ""
			},
		]);
		setEdit(true);
	};

    // Function to handle save
	const handleSave = () => {
		setEdit(!isEdit);
		setRows(rows);
		console.log("saved : ", rows);
		setDisable(true);
		setOpen(true);
	};

    // The handleInputChange handler can be set up to handle
	// many different inputs in the form, listen for changes
	// to input elements and record their values in state
	const handleInputChange = (e, index) => {
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};

    // Showing delete confirmation to users
	const handleConfirm = () => {
		setShowConfirm(true);
	};

    // Handle the case of delete confirmation
	// where user click no
	const handleNo = () => {
		setShowConfirm(false);
	};

    // Handle the case of delete confirmation where
	// user click yes delete a specific row of id:i
	const handleRemoveClick = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
		setShowConfirm(false);
	};

  return (
    <div class="container">
      <h1>UserDetails Table</h1>
     
      <table class="rwd-table">
        <tbody>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>PassWord</th>
            <th>City</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
          {/* <tr> */}
          {rows.map((row, i) => {
			return (
				<div>
				<tr>
					{isEdit ? (
					<div>
						<td padding="none">
						<input
							value={row.name}
							name="name"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
						<td padding="none">
						<input
							value={row.email}
							name="email"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
                        <td padding="none">
						<input
							value={row.password}
							name="password"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
						<td padding="none">
						<input
							value={row.city}
							name="city"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
                        <td padding="none">
						<input
							value={row.age}
							name="age"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
					</div>
					) : (
					<div>
						<tr component="th" scope="row">
						{row.name}
						</tr>
						<tr component="th" scope="row">
						{row.email}
						</tr>
						<tr component="th" scope="row" align="center">
						{row.city}
						</tr>
                        <tr component="th" scope="row" align="center">
						{row.age}
						</tr>
                        <tr component="th" scope="row" align="center">
						{row.password}
						</tr>
						<tr
						component="th"
						scope="row"
						align="center"
						></tr>
					</div>
					)}
					{isEdit ? (
					<button className="mr10" onClick={handleConfirm}>
						{/* <ClearIcon /> */}
                        Clear
					</button>
					) : (
					<button className="mr10" onClick={handleConfirm}>
						{/* <DeleteOutlineIcon /> */}
                        Delete
					</button>
					)}
					{showConfirm && (
					<div>
						<div
						open={showConfirm}
						onClose={handleNo}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
						>
						<div id="alert-dialog-title">
							{"Confirm Delete"}
						</div>
						<div>
							<div id="alert-dialog-description">
							Are you sure to delete
							</div>
						</div>
						<div>
							<button
							onClick={() => handleRemoveClick(i)}
							color="primary"
							autoFocus
							>
							Yes
							</button>
							<button
							onClick={handleNo}
							color="primary"
							autoFocus
							>
							No
							</button>
						</div>
						</div>
					</div>
					)}
				</tr>
				</div>
			);
			})}
            {/* <td>{userDetails.name}</td>
            <td>{userDetails.email}</td>
            <td>{userDetails.password}</td>
            <td>{userDetails.city}</td>
            <td>{userDetails.age}</td> */}
            <td>
            {isEdit ? (
			<div>
				<button onClick={handleAdd}>
				
				ADD
				</button>
				{rows.length !== 0 && (
				<div>
					{disable ? (
					<button disabled align="right" onClick={handleSave}>
						
						SAVE
					</button>
					) : (
					<button align="right" onClick={handleSave}>
						{/* <DoneIcon /> */}
						SAVE
					</button>
					)}
				</div>
				)}
			</div>
			) : (
			<div>
				{/* <button onClick={handleAdd}>
			
				ADD
				</button> */}
				<button align="right" onClick={handleEdit}>
				{/* <CreateIcon /> */}
				EDIT
				</button>
			</div>
			)}
            </td>
            {/* // <td>
            //     <button align="right" onClick={handleEdit}>
				
			// 	EDIT
			// 	</button>
            //     </td>):()} */}
            
          {/* </tr> */}
        </tbody>
      </table>
    </div>
  );
}