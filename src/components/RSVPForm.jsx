import './RSVPForm.css';

function RSVPForm() {
	return (
		<section className="rsvp-form-section">
			<div className="container">
				<h2 className="section-title">RSVP</h2>

				<div className="contact-info-section">
					<p className="contact-info-intro">If you have any questions, please contact:</p>
					<div className="contacts">
						<div className="contact-item">
							<span className="contact-name">James Gordon</span>
							<a href="tel:07950742403" className="contact-phone">07950 742403</a>
						</div>
						<div className="contact-item">
							<span className="contact-name">Anna Olejarz</span>
							<a href="tel:07450675550" className="contact-phone">07450 675550</a>
						</div>
						<div className="contact-item">
							<span className="contact-name">Renatta Olejarz</span>
							<a href="tel:+48783191264" className="contact-phone">+48 783 191 264</a>
						</div>
						<div className="contact-item">
							<span className="contact-name">Julie Gordon</span>
							<a href="tel:07939518451" className="contact-phone">07939 518451</a>
						</div>
					</div>
				</div>

				<div className="rsvp-form rsvp-closed">
					<p>The RSVP form is now closed.</p>
					<p>
						Please contact the groom on{' '}
						<a href="tel:07950742403" className="contact-phone">07950 742403</a>.
					</p>
				</div>
			</div>
		</section>
	);
}

export default RSVPForm;
