import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			hasScrolled: false
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handScroll)
	}

	handScroll = (event) => {
		const scrollTop = window.pageYOffset

		if (scrollTop > 50) {
			this.setState({ hasScrolled: true })
		} else {
			this.setState({ hasScrolled: false })
		}
	}

	render() {
		return (
			<div className={this.state.hasScrolled ?
				'Header HeaderScrolled' : 'Header'}>
				<div className="HeaderGroup">
					<Link to="/"><img src={require('../images/logo_stateless.svg')} width="50" /></Link>
					<Link to="/courses">My Work</Link>
					<Link to="/downloads">Methodologies</Link>
					<Link to="/workshops">About</Link>
					<Link to="/buy"><button>Contact</button></Link>
				</div>
			</div>
		)
	}
}

export default Header
