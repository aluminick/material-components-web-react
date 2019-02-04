import * as React from 'react';
import Snackbar, { SnackbarLabel, SnackbarActions, SnackbarActionButton, SnackbarDismissButton } from '../../../packages/snackbar';
import '../../../packages/snackbar/index.scss';
import '../../../packages/icon-button/index.scss';

const SnackbarTests: React.FunctionComponent = () => {
  return (
    <div>
      <Snackbar open={true} timeoutMs={10000}>
        <SnackbarLabel>my label</SnackbarLabel>
        <SnackbarActions>
          <SnackbarActionButton>
            send
          </SnackbarActionButton>
          <SnackbarDismissButton/>
        </SnackbarActions>
      </Snackbar>
    </div>
  )
}

export default SnackbarTests