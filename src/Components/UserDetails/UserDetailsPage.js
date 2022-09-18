import React , { useState }from "react";

export default function UserDetailsPage()
{

	const userDetails = JSON.parse(localStorage.getItem('data'));
	
const [isEdit, setEdit] = React.useState(false);
const [disable, setDisable] = React.useState(true);
const [rows, setRows] = useState([
    { id: 1,
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password ,
        city: userDetails.city,
        age: userDetails.age
    },
]);
    // save
	const handleSave = () => {
		setEdit(!isEdit);
		setRows(rows);
		console.log("saved : ", rows);
		setDisable(true);
	};

    // inputchange
	const handleInputChange = (e, index) => {
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};

    // delete
	const handleRemoveClick = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
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
          {rows.map((row, i) => {
			return (				
			<tr>
					{isEdit ? (
					<>
					<td>
						<input
							value={row.name}
							name="name"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
						<td>
						<input
							value={row.email}
							name="email"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
                        <td>
						<input
							value={row.password}
							name="password"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
						<td>
						<input
							value={row.city}
							name="city"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
                        <td>
						<input
							value={row.age}
							name="age"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
						{/* <td></td> */}
				</>
					) : (
					<>
						<td>{row.name}</td>
						<td>{row.email}</td>
						<td>{row.password}</td>
                        <td>{row.city}</td>
						<td>{row.age}</td>
						{/* <td></td> */}
					</>
					)}
                   
                    {/* {isEdit &&
                     (
					<button className="mr10" onClick={() => handleRemoveClick(i)}>
                        Delete
					</button>
					)} */}
                   
					<td>
            {isEdit ? (
			<div>
				{rows.length !== 0 && (
				<div>
					{disable ? (
					<button disabled align="center" onClick={handleSave}>
						SAVE
					</button>
					) : (
					<button  onClick={handleSave}>
						SAVE
					</button>
					)}&nbsp;
					<button className="mr10" onClick={() => handleRemoveClick(i)}>
                        Delete
					</button>
				</div>
				)}
			</div>
			) : (
				<button align="left" onClick={()=>setEdit(!isEdit)}>
				EDIT
				</button>
			)}
            </td>
</tr>
				
			);
			})}
            
        </tbody>
      </table>
    </div>
  );
}