import React from 'react';
import Firebase from 'firebase';

import TLBlock from './TLBlock';
import './styles.css';

type TLProps = {
	category: string;
	details: Array<Firebase.firestore.QueryDocumentSnapshot>;
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
									name={exp.data().name}
									pos={exp.data().pos}
									start={exp.data().start.toDate()}
									end={exp.data().end.toDate()}
									info={exp.data().info}
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
