import React, { useEffect } from 'react'; 
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersJobs } from '../../helpers/apiCalls'
import { setAdminJobList, setErrorMsg, resetErrorMsg } from '../../actions/actions'


function AdminHomepage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const jobList = useSelector(state => state.adminJobList)
 
  useEffect(() => {
    getAllUsersJobs(user.attributes.token)
      .then(data => {
        dispatch(setAdminJobList(data.data))
        dispatch(resetErrorMsg());
      })
      .catch(error => {
        dispatch(setErrorMsg('Sorry, it looks like we are having some trouble retrieving the data. Please refresh or try again later.'))
      })
  }, [dispatch, user.attributes.token])

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
      width: 200,
    },
    {
      field: 'job_type',
      headerName: 'Job Type',
      width: 110,
    },
    {
      field: 'completion_date',
      type: 'date',
      headerName: 'Date of Substantial Completion',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Job Status',
      sortable: true,
      width: 150,
    },
    {
      field: 'job_site_contact_name',
      headerName: 'Job Site Contact',
      width: 200,
    },
  ];
  
  return(
    <div>
      <h2>Admin Dashboard</h2>
      <div style={{ height: 400, width: '100%', textAlign: 'left', marginLeft: 16 }}>
        <DataGrid
          rows={jobList} 
          columns={columns}
          pageSize={5}  
          sortingOrder={['asc', 'desc', null]}
        />
      </div>
    </div>
  )
}

export default AdminHomepage;