export const getAllJobs = (id) => {
  return fetch(`https://lienflash-be.herokuapp.com/api/v1/users/${id}/jobs`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
}

export const postNewJob = async (newJob, id) => {
  return fetch(`https://lienflash-be.herokuapp.com/api/v1/users/${id}/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
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

export const updateJobStatus = (id, jobId, newStatus) => {
  return fetch(`https://lienflash-be.herokuapp.com/api/v1/users/${id}/jobs/${jobId}?status=${newStatus}`, {
    method: 'PATCH'
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

export const createUser = (info) => {
  return fetch('https://lienflash-be.herokuapp.com/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: info.userName,
      business_name: info.companyName,
      email: info.email,
      business_work_number: info.workNumber,
      business_cell_number: info.cellNumber,
      business_address: info.businessAddress,
      business_address_line2: info.businessAddressLine2,
      business_city: info.businessCity,
      business_state: info.businessState,
      business_zip_code: info.businessZipCode,
      password: info.password   
    })
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    } else {
      return response.json();
    }
  })
}