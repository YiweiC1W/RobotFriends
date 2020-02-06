import React from 'react';

const SearchBox = ({ placeHolder, handleChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba br3 b--green bg-lightest-blue"
				type="search"
				placeholder={placeHolder}
				onChange={handleChange}
			/>
		</div>
	);
};

export default SearchBox;
