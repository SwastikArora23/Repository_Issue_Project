export const buttonNotification = {
    successNotific: {
        variant: 'success',
        message: 'Login Succesful. Fetching Details from Github',
    },
    errorNotific: {
        variant: 'error',
        message: 'Invalid Repository Name. Enter a Valid Github Repository name.',
    },
    loadingNotific: {
        variant: 'info',
        message: 'Fetching Repositories Issues. Please Be Patient..',
    },
};

export const GET_USER_REPO_LOADING = 'GET_USER_REPO_LOADING';
export const GET_USER_REPO_SUCCESS = 'GET_USER_REPO_SUCCESS';
export const GET_USER_REPO_FAILED = 'GET_USER_REPO_FAILED';
export const GET_USERNAME_FAILED = 'GET_USERNAME_FAILED';
export const GET_USERNAME_SUCCESS = 'GET_USERNAME_SUCCESS';
export const axiosHeader = {
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${process.env.AUTHENTICATION_TOKEN}`
    },
};

export const columnHeaders = [
    {
        headerName: 'Issue-Name',
        field: 'title',
        sortable: true,
        filter: true,
        resizable: true,
        cellRenderer: 'LinkComponent',
    },
    {
        headerName: 'Status',
        field: 'state',
        sortable: true,
        filter: true,
        resizable: true,
    }
];
