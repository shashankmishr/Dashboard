import React, { useState } from 'react'
import DataTable from '../../components/dataTable/DataTable'
//import { GridColDef } from '@mui/x-data-grid';
import { userRows } from "../../data";
import "./users.scss"
import Add from '../../components/add/Add';
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {field: "img",
  headerName:"Avatar" ,
   width :100 , 
renderCell: (params)=>{
  return <img src = {params.row.img || "/noavatar.png" } alt = "" />
}} ,

  {
       field  : "status" , 
       headerName :"Status" ,
        width: 100 , 
         type : "boolean"
  },
  
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
    type : "string"
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
    type :  "number"
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
       <button onClick={()=>setOpen(true)}>
        Add New User
       </button>

      </div>
      <DataTable  slug = "user" columns ={columns}  rows ={userRows}/>
      {open && <Add  slug ="user" columns = {columns} setOpen ={setOpen}/>}
    </div>
  )
}

export default Users
