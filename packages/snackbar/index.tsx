import * as React from 'react';
import * as classnames from 'classnames';

// @ts-ignore no d.ts.file
import {MDCSnackbarFoundation, MDCSnackbarAdapter, util} from '@material/snackbar/dist/mdc.snackbar';
import SnackbarLabel from './SnackbarLabel';
import SnackbarActions from './SnackbarActions';
import SnackbarActionButton from './SnackbarActionButton';
import SnackbarDismissButton from './SnackbarDismissButton';

type SnackbarProps = {
  className?: string;
  notifyOpening?: () => void;
  notifyOpened?: () => void;
  notifyClosing?: (reason: string) => void;
  notifyClosed?: (reason: string) => void;
  closeOnEscape?: boolean;
  timeoutMs? : number;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>
  open: boolean
}

type SnackbarState = {
  classList: Set<string>
}

class Snackbar extends React.Component<SnackbarProps, SnackbarState> {

  foundation: MDCSnackbarFoundation;
  state: SnackbarState = {classList: new Set()};

  get adapter(): Partial<MDCSnackbarAdapter> {
    return {
      addClass: (className: string) => {
        const {classList} = this.state;
        classList.add(className);
        this.setState({classList});
      },
      removeClass: (className: string) => {
        const {classList} = this.state;
        classList.delete(className);
        this.setState({classList});
      },
      notifyOpening: () => {
        this.props.notifyOpening && this.props.notifyOpening();
      },
      notifyOpened: () => {
        this.props.notifyOpened && this.props.notifyOpened();
      },
      notifyClosing: (reason: string) => {
        this.props.notifyClosing && this.props.notifyClosing(reason);
      },
      notifyClosed: (reason: string) => {
        this.props.notifyClosed && this.props.notifyClosed(reason);
      }
    };
  }
  get classes() {
    const {classList} = this.state;
    const {className} = this.props;
    return classnames('mdc-snackbar', Array.from(classList), className);
  }
  componentDidMount() {
    const {open, closeOnEscape, timeoutMs} = this.props;
    this.foundation = new MDCSnackbarFoundation(this.adapter);
    this.foundation.init();

    if (open) {
      this.open();
    }
    if (closeOnEscape !== undefined) {
      this.foundation.setCloseOnEscape(closeOnEscape);
    }
    if (timeoutMs !== undefined) {
      this.foundation.setTimeoutMs(timeoutMs);
    }

  }
  componentWillUnmount() {
    this.foundation.destroy();
  }
  componentDidUpdate(prevProps: SnackbarProps) {
    const {open, closeOnEscape, timeoutMs} = this.props;

    if (prevProps.closeOnEscape !== closeOnEscape) {
      this.foundation.setCloseOnEscape(closeOnEscape);
    }
    if (prevProps.timeoutMs !== timeoutMs) {
      this.foundation.setTimeoutMs(timeoutMs);
    }
    if (prevProps.open !== open) {
      return open ? this.open() : this.foundation.close();
    }
  }
  destroy() {
    this.foundation.destroy();
  }
  private open = (): void => {
    this.foundation.open();
  }
  isOpen = (): boolean => {
    return this.foundation.isOpen()
  }
  getTimeoutMs = (): number => {
    return this.foundation.getTimeoutMs();
  }
  setTimeoutMs = (timeoutMs: number): void => {
    this.foundation.setTimeoutMs(timeoutMs);
  }
  getCloseOnEscape = (): boolean => {
    return this.foundation.getCloseOnEscape();
  }
  setCloseOnEscape = (closeOnEscape: boolean): void => {
    this.foundation.setCloseOnEscape(closeOnEscape);
  }
  handleKeyDown = (e: React.KeyboardEvent<HTMLElement>): void => {
    e.persist();
    this.props.onKeyDown && this.props.onKeyDown(e);
    if (!this.foundation) return;
    this.foundation.handleKeyDown(e);
  }
  handleActionButtonClick = (e: React.MouseEvent<any>): void => {
    this.foundation.handleActionButtonClick(e)
  }
  handleActionIconClick = (e: React.MouseEvent<any>): void => {
    this.foundation.handleActionIconClick(e)
  }
  render() {
    const {children} = this.props;
    return (
      <div className={this.classes}>
        <div className="mdc-snackbar__surface">
          {children}
        </div>
      </div>
    )
  }
}

export default Snackbar
export {
  SnackbarLabel,
  SnackbarActions,
  SnackbarActionButton,
  SnackbarDismissButton
}