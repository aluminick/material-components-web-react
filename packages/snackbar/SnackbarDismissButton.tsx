import * as React from 'react';

/* interface DismissButtonProps extends InjectedProps<HTMLButtonElement> {
  className: string,
  unbounded: boolean,
  initRipple: (surface: HTMLButtonElement) => void,
}

const DismissButton: React.FunctionComponent<DismissButtonProps> = ({
  className = "",
  initRipple,
  unbounded,
  ...otherProps
}) => {
  const classes = `mdc-icon-button mdc-snackbar__dismiss material-icons ${className}`;
  return (
    <button title="Dismiss" className={classes} ref={initRipple} {...otherProps}>close</button>
  );
};

const SnackbarDismissButton = withRipple<DismissButtonProps, HTMLButtonElement>(DismissButton); */

const SnackbarDismissButton = () => <button title="Dismiss" className={"mdc-icon-button mdc-snackbar__dismiss material-icons"}>close</button>

export default SnackbarDismissButton;