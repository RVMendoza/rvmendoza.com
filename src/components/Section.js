import React from 'react'


class Header extends React.Component {
	render() {
    const { title, children} = this.props
		return (
			<div className="">
				<h3 className="">
					{title}
				</h3>
				{children}
			</div>
		)
	}
}

export default Header
