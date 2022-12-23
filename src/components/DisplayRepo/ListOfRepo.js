import React from 'react';
import { columnHeaders } from '../../common/constants';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useStyles } from '../../styles/components/listOfRepo';
import { Box } from '@material-ui/core';
import GridDisplay from '../GridDisplay';
import { useHistory } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';

const ListOfRepo = (props) => {
    const { enqueueSnackbar } = props;
    const history = useHistory();
    const getUserNameFromRedux = (state) => state.loginReducer.uname;
    const username = useSelector(getUserNameFromRedux);
    const getUserRepoFromRedux = (state) => state.appReducer.data;
    const rowData = useSelector(getUserRepoFromRedux);

    const classes = useStyles(props);
    const dispatch = useDispatch();

    return (
        <Box className={classes.listOfRepoContainer}>
            <GridDisplay
                rowData={rowData}
                columnHeaders={columnHeaders}
            />
        </Box>
    );
};

export default withSnackbar(ListOfRepo);

ListOfRepo.propTypes = {
    enqueueSnackbar: PropTypes.func,
};

ListOfRepo.defaultProps = {
    enqueueSnackbar: ()=>{}
};
