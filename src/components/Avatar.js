import React from 'react'


class Avatar extends React.Component {
	render() {
    const { src, size } = this.props
		return (
			<div className="Avatar u-inlineBlock">
				<img
					className="Avatar-image"
					src={src}
					alt={`Kyle Mathews`}
				/>
			</div>
		)
	}
}

export default Avatar
