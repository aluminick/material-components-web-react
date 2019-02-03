import * as React from 'react';
import * as classnames from 'classnames';
import Button, {ButtonProps} from '@material/react-button';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;
export interface SnackbarDismissButtonProps<T extends ButtonTypes> extends Omit<ButtonProps<T>, 'initRipple'> {
  className?: string
};

const SnackbarDismissButton: <T extends ButtonTypes>(props: SnackbarDismissButtonProps<T>) =>
  React.ReactElement<any> = ({
    /* eslint-disable react/prop-types */
    className = '',
    children,
    ...otherProps
    /* eslint-enable react/prop-types */
  }) => (
    // @ts-ignore  https://github.com/Microsoft/TypeScript/issues/28892
    <Button
      type="button"
      title="Dismiss"
      className={classnames(className, 'mdc-snackbar__dismiss', 'mdc-icon-button', 'material-icons')}
      {...otherProps}
    >{children}</Button>
  );

type SnackbarDismissButton<T extends ButtonTypes> = React.ReactElement<SnackbarDismissButtonProps<T>>;
export default SnackbarDismissButton;
