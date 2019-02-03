import * as React from 'react';
import * as classnames from 'classnames';
import Button, {ButtonProps} from '@material/react-button';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;
export interface SnackbarActionButtonProps<T extends ButtonTypes> extends Omit<ButtonProps<T>, 'initRipple'> {
  className?: string
};

const SnackbarActionButton: <T extends ButtonTypes>(props: SnackbarActionButtonProps<T>) =>
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
      className={classnames(className, 'mdc-snackbar__action')}
      {...otherProps}
    >{children}</Button>
  );

type SnackbarActionButton<T extends ButtonTypes> = React.ReactElement<SnackbarActionButtonProps<T>>;
export default SnackbarActionButton;
