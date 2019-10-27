import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import * as Inject from '../../../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	resumeState: stores.store.resumeState,
	showResumeContent: stores.store.showResumeContent,
}))
@observer
class Resume extends Component {
	render() {
		const { resumeState, showResumeContent }: any = this.props;
		const style = resumeState ? 'resume menu-item active' : 'resume menu-item';

		return (
			<div className="resume-block menu-block" onClick={showResumeContent}>
				<div className="resume-block-container">
					<h2 className={style}>Resume</h2>
				</div>
			</div>
		);
	}
}

export default Resume;
