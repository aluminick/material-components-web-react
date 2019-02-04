import * as React from 'react';
import * as classnames from 'classnames';

export interface SnackbarLabelProps extends React.HTMLProps<HTMLDivElement> {
    className?: string,
    role?: string,
    ariaLive?: React.HTMLAttributes<HTMLDivElement>['aria-live']
}

const SnackbarLabel: (props: SnackbarLabelProps) => 
    React.ReactElement<HTMLDivElement> =({
        /* eslint-disable react/prop-types */
        className = '',
        role = 'status',
        children,
        ariaLive = 'polite' as React.HTMLAttributes<HTMLDivElement>['aria-live'],
        ...otherProps
        /* eslint-enable react/prop-types */
    }) => (
        <div className={classnames(className, 'mdc-snackbar__label')} role={role} aria-live={ariaLive} {...otherProps}>{children}</div>
    )

export default SnackbarLabel;