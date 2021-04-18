import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail author="Sam" date="Tdoay at 2" image={faker.image.avatar()} text="hi" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="John" date="Today at 4" image={faker.image.avatar()} text="Also hi" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Jim" date="Yesterday at 2" image={faker.image.avatar()} text="Another hi" />
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
