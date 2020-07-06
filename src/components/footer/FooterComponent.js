import React from 'react';

import '../../styles/footer.css';

class FooterComponent extends React.Component {

	render() {
		return (
			<footer className="container">
			{/*
				<p className="float-right"><a id="button-scroll-to-top">Back to top</a></p><br />
				<div className="social-networks">
					<ul className="social-networks-nav">
						<li className="social-networks-nav-item">
							<a id="youtube" className="social-networks-nav-link fab fa-youtube youtube" target="_blank"></a>
						</li>
						<li className="social-networks-nav-item">
							<a id="twitter" className="social-networks-nav-link fab fa-twitter twitter" target="_blank"></a>
						</li>
						<li className="social-networks-nav-item">
							<a id="facebook" className="social-networks-nav-link fab fa-facebook-f facebook" target="_blank"></a>
						</li>
						<li className="social-networks-nav-item">
							<a id="instagram" className="social-networks-nav-link fab fa-instagram instagram" target="_blank"></a>
						</li>
					</ul>
				</div>
			*/}
				<p>© 2020 REACT-FORMATION, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
			</footer>
		);
	}
}

export default FooterComponent