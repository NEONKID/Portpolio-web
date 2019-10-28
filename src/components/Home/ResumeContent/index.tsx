import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Awards from './Awards';
import Education from './Education';
import EmailBtn from '../EmailBtn';
import Experience from './Experience';
import Profile from './Profile';
import Skills from './Skills';

import * as Inject from '../../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	resumeState: stores.store.resumeState,
}))
@observer
class ResumeContent extends Component {
	render() {
		const { resumeState }: any = this.props;
		const style = resumeState! ? 'content-blocks resume showx' : 'content-blocks resume';

		return (
			<div className={style}>
				<section className="content" id="resumeContent">
					<Profile />
					<Skills />
					<Experience />
					<Education />
					<Awards />
					<EmailBtn email="contact@neonkid.xyz" />
				</section>
			</div>
		);
	}
}

export default ResumeContent;
