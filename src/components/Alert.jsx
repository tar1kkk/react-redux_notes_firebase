import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group';

function Alert() {
	const { alert, hide } = useContext(AlertContext);

	return (
		<CSSTransition
			in={alert.visible}
			timeout={{
				enter: 500,
				exit: 350
			}}
			classNames={'alert'}
			mountOnEnter
			unmountOnExit
		>
			<div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} >
				<strong>Внимание! </strong> {alert.text}
				<button onClick={hide} type="button" className="btn-close" aria-label="Close">&times;</button>
			</div>
		</CSSTransition>
	);
}

export default Alert;