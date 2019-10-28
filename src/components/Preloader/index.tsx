import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import Favicon from './favicon.png';

import * as Inject from '../../stores/MenuStateStore';

import '../jq';
import './styles.css';

const useData = () => {
	const { store }: Inject.Props = Inject.useStores();

	return {
		siteLoading: store.siteLoading,
		removeSplash: store.removeSplash,
		loadingComplete: store.loadingComplete,
	};
};

const Preloader = () => {
	const data = useData();
	const style = data.siteLoading ? 'preloader' : 'preloader fadeOut';

	useEffect(() => {
		setTimeout(() => data.loadingComplete(), 500);
	});

	return (
		<div className={style} style={data.removeSplash ? { display: 'none' } : {}}>
			<div className="anim pulse">
				<img src={Favicon} alt="" />
			</div>
		</div>
	);
};

export default observer(Preloader);
