
// user token to fetch current users profile info
export const getUserProfile = (token) => {
  return fetch(`https://lienflash-be.herokuapp.com/api/v1/user`, {
  method: "GET",
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  })
} 

export const getAllJobs = (id, token) => {
  return fetch(`https://lienflash-be.herokuapp.com/api/v1/user/${id}/jobs`, {
  method: "GET",
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Authorization': `Bearer ${token}`
  }
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
}

export const postNewJob = async (newJob, id, token) => {
  return fetch(`https://lienflash-be.herokuapp.com/api/v1/user/${id}/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    Accept: 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(
      {
        job_type: newJob.jobType,
        job_site_contact_name: newJob.jobSiteContactName,
        job_site_name: newJob.jobSiteName || null,
        job_site_address: newJob.jobSiteAddress,
        job_site_address_line_2: newJob.jobSiteAddressLine2 || null,
        job_site_city: newJob.jobSiteCity,
        job_site_state: newJob.jobSiteState,
        job_site_zip_code: newJob.jobSiteZipCode,
        completion_date: newJob.completionDate,
        description_of_work: newJob.jobDescription,
        labor_cost: newJob.laborCost || null,
        material_cost: newJob.materialCost || null,
        total_cost: newJob.totalCost,
        client_company_name: newJob.clientCompanyName || null,
        business_address: newJob.businessAddress || null,
        business_address_line_2: newJob.businessAddressLine2 || null,
        business_city: newJob.businessCity || null,
        business_state: newJob.businessState || null,
        business_zip_code: newJob.businessZipCode || null,
        additional_info: newJob.additionalInfo || null
      }
    )
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  })
}

export const updateJobStatus = (id, jobId, newStatus, token) => {
  return fetch(`https://lienflash-be.herokuapp.com/api/v1/user/${id}/jobs/${jobId}?status=${newStatus}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  })
}


export const postLogin = (info) => {
  return fetch('https://lienflash-be.herokuapp.com/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(info)
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  })
}
