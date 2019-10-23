import React from 'react';

import TLBlock from './TLBlock';
import './styles.css';

type TLProps = {
	category: string;
	details: Array<any>;
};

const Timeline = ({ category, details }: TLProps) => {
	const style = 'timeline ' + category;

	return (
		<div className={style}>
			<div className="row">
				<div className="col-md-12">
					<div className="exp-holder">
						{details.map((exp, i) => {
							return (
								<TLBlock
									category={category}
									name={exp.name}
									pos={exp.pos}
									start={exp.start}
									end={exp.end}
									info={exp.info}
									key={i}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
