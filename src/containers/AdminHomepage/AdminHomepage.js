import React, { useEffect, useState } from 'react'; 
import AdminJobDetails from '../../components/AdminJobDetails/AdminJobDetails'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersJobs } from '../../helpers/apiCalls'
import { setAdminJobList, setErrorMsg, resetErrorMsg } from '../../actions/actions'

function AdminHomepage() {
  const dispatch = useDispatch();
  const [viewDashboard, changeView] = useState(true)
  const [job, selectJob] = useState({})
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

  const handleClick = (jobDetails) => {
    changeView(false)
    selectJob(jobDetails)
  }

  const handleStatusChange = () => {
    // handle status changes w/ PATCH
  }

  const columns = [
    {
      field: 'openJobButton',
      headerName: 'View Job Details',
      width: 150,
      renderCell: (RowParams) => (
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => handleClick(RowParams.data)}
          >
          OPEN
        </Button>
      ),
    },
    {
      field: 'users_name',
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
      valueFormatter: (params) =>
        params.value.split('T')[0],
      width: 250,
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
    }
  ];

  return(
    <div className='admin-dashboard'>
      { viewDashboard &&
      <>
        <h2>Admin Dashboard</h2>
        <div style={{ height: 400, width: '100%', textAlign: 'left', marginLeft: 16 }}>
          <DataGrid
            rows={jobList} 
            columns={columns}
            pageSize={5}  
            sortingOrder={['asc', 'desc', null]}  
          />
        </div>
      </>
      }
      { !viewDashboard &&
        <AdminJobDetails jobDetails={job} changeView={changeView} handleStatusChange={handleStatusChange} />
      }
    </div>
  )
}

export default AdminHomepage;