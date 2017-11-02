import React from 'react'


class Header extends React.Component {
	render() {
    const { title, children} = this.props
		return (
			<section className="Section" {...this.props}>
				<h1 className="Section-headline u-marginBb">
					{title}
				</h1>
				{children}
			</section>
		)
	}
}

export default Header
