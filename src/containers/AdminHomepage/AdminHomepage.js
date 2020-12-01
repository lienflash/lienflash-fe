import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';


function AdminHomepage() {

  const columns = [
    {
      field: 'openJobButton',
      headerName: 'View Job Details',
      width: 150,
      renderCell: () => (
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Open
        </Button>
      ),
    },
    {
      field: 'client_name',
      headerName: 'Client Name',
      width: 250,
    },
    {
      field: 'completion_date',
      type: 'date',
      headerName: 'Date of Substantial Completion',
      width: 200,
    },
    {
      field: 'job_status',
      headerName: 'Job Status',
      sortable: true,
      width: 200,
    },
  ];

  // sample data for UI testing
  const rows = [
    {
      id: 1,
      completion_date: '23/10/2020',
      client_name: 'Bruce Craft',
      job_status: 'NOI Requested',
    },
    {
      id: 2,
      completion_date: '12/11/2020',
      client_name: 'Rachel McDee',
      job_status: 'Lien Requested'
    },
    {
      id: 3,
      completion_date: '29/10/2020',
      client_name: 'Nelly Grunge',
      job_status: 'Lien Filed'
    },
    {
      id: 4,
      completion_date: '10/11/2020',
      client_name: 'Beau Tiger',
      job_status: 'Lien Requested'
    },
    {
      id: 5,
      completion_date: '03/11/2020',
      client_name: 'Mary Lee Oswald',
      job_status: 'NOI Requested'
    },
  ];

  return(
    <div>
      <h2>Admin Dashboard</h2>
      <div style={{ height: 400, width: '100%', textAlign: 'left', marginLeft: 16 }}>
        <DataGrid
          rows={rows} 
          columns={columns}
          pageSize={5}  
          sortingOrder={['asc', 'desc', null]}
        />
      </div>
    </div>
  )
}

export default AdminHomepage;