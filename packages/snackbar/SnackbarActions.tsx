import * as React from 'react';
import * as classnames from 'classnames';

export interface SnackbarActionsProps {
  className?: string,
  children: React.ReactNode
}

const SnackbarActions = (props: SnackbarActionsProps) => (
  <div className={classnames(props.className, 'mdc-snackbar__actions')}>
    {props.children}
  </div>
);

export default SnackbarActions;