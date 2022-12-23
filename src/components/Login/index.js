import React, { useEffect, useState, useRef } from 'react';
import { Box, FormControl, Button } from '@material-ui/core';
import { useStyles } from '../../styles/components/login.js';
import { withSnackbar } from 'notistack';
import { buttonNotification } from '../../common/constants';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import PropTypes from 'prop-types';
import { fetchRepoAndIssues } from '../../api/fetchRepoAndIssues';

const Login = (props) => {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const history = useHistory();
    const [uname, setUname] = useState('');
    const [repoName, setRepoName] = useState('');

    const { successNotific } = buttonNotification;
    const { enqueueSnackbar } = props;

    const inputRef = useRef();
    const submitBtn = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onUnameChangeHandler = (e) => setUname(e.target.value);

    const onRepoChangeHandler = (e) => setRepoName(e.target.value);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.name === 'email' && submitBtn.current.focus();
        }
    };

    return (
        <FormControl className={classes.signInForm}>
            <Header />

            <Box className={classes.inputContainer}>
                <input
                    type='email'
                    name='email'
                    ref={inputRef}
                    className='username'
                    onKeyDown={handleKeyDown}
                    placeholder='Repository Owner Name'
                    value={uname}
                    onChange={onUnameChangeHandler}
                />
                <input
                    type='email'
                    name='email'
                    ref={inputRef}
                    className='username'
                    onKeyDown={handleKeyDown}
                    placeholder='GitHub Repository Name'
                    value={repoName}
                    onChange={onRepoChangeHandler}
                />
                <Button
                    key={successNotific}
                    disabled={uname.length === 0 || repoName.length === 0}
                    className={classes.btn}
                    variant='contained'
                    color='primary'
                    name='submit'
                    ref={submitBtn}
                    onClick={() =>
                        fetchRepoAndIssues(uname, repoName, enqueueSnackbar, dispatch, history)
                    }
                >
					Submit
                </Button>
            </Box>
        </FormControl>
    );
};

export default withSnackbar(Login);

Login.propTypes = {
    enqueueSnackbar: PropTypes.func,
};

Login.defaultProps = {
    enqueueSnackbar: ()=>{}
};