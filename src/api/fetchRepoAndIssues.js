import { buttonNotification } from '../common/constants';
import { getRepoAction } from '../redux/actions/getRepoAction';

export const fetchRepoAndIssues = async (
    userNameInUrl,
    repositoryName,
    enqueueSnackbar,
    dispatch,
    history
) => {
    const { successNotific, errorNotific, loadingNotific } = buttonNotification;
    enqueueSnackbar(loadingNotific.message, { variant: loadingNotific.variant });
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    const isValidGitHubUser = await dispatch(getRepoAction(userNameInUrl, repositoryName));
    if (isValidGitHubUser) {
        enqueueSnackbar(successNotific.message, {
            variant: successNotific.variant,
        });
        history.push(`/displayuserrepo/${userNameInUrl.toLowerCase()}`);
    } else {
        enqueueSnackbar(errorNotific.message, { variant: errorNotific.variant });
    }
};
