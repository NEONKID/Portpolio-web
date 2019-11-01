import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import * as Inject from '../../stores/MenuStateStore';

import './styles.css';

const useData = () => {
	const { store }: Inject.Props = Inject.useStores();

	return {
		siteLoading: store.siteLoading,
		onRemoveSplash: store.onRemoveSplash,
	};
};

const Slider = () => {
	const data = useData();
	const style = data.siteLoading ? 'preloader-left' : 'preloader-left slideOut-left';

	useEffect(() => {
		setTimeout(() => {
			if (!data.siteLoading) data.onRemoveSplash();
		}, 1500);
	});

	return <div className={style}></div>;
};

export default observer(Slider);
