import * as React from 'react';
import * as classnames from 'classnames';

export interface SnackbarLabelProps extends React.HTMLProps<HTMLDivElement> {
    className?: string,
    label: string,
    role: string,
    ariaLive: 'off' | 'assertive' | 'polite'
}

const SnackbarLabel: (props: SnackbarLabelProps) => 
    React.ReactElement<HTMLDivElement> =({
        /* eslint-disable react/prop-types */
        className = '',
        label,
        role,
        ariaLive,
        ...otherProps
        /* eslint-enable react/prop-types */
    }) => (
        <div className={classnames(className, 'mdc-snackbar__label')} role={role ? role: 'status'} aria-live={ariaLive} {...otherProps}>{label}</div>
    )

export default SnackbarLabel;