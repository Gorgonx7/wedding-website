import { useState } from 'react';
import './RSVPForm.css';

function RSVPForm() {
	const [formData, setFormData] = useState({
		firstName: '',
		surname: '',
		email: '',
		phone: '',
		attending: '',
		venueStay: false,
		wantsBreakfast: false,
		roomChoice1: '',
		roomChoice2: '',
		roomChoice3: '',
		requiresAccessibleRoom: false,
		requiresMultipleRooms: false,
		flower: '',
		dietaryRequirements: '',
		songSuggestion: '',
		additionalNotes: ''
	});

	const [additionalGuests, setAdditionalGuests] = useState([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};

		if (!formData.firstName.trim()) {
			newErrors.firstName = 'First name is required';
		}

		if (!formData.surname.trim()) {
			newErrors.surname = 'Surname is required';
		}

		if (!formData.attending) {
			newErrors.attending = 'Please select whether you will be attending';
		}

		// Only validate email and phone if attending
		if (formData.attending === 'yes' || formData.attending === 'evening') {
			if (!formData.email.trim()) {
				newErrors.email = 'Email is required';
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
				newErrors.email = 'Please enter a valid email address';
			}

			if (!formData.phone.trim()) {
				newErrors.phone = 'Phone number is required';
			}
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		
		// If unchecking venueStay, clear accommodation fields
		if (name === 'venueStay' && !checked) {
			setFormData(prev => ({
				...prev,
				[name]: false,
				wantsBreakfast: false,
				roomChoice1: '',
				roomChoice2: '',
				roomChoice3: '',
				requiresAccessibleRoom: false,
				requiresMultipleRooms: false
			}));
		} else {
			setFormData(prev => ({
				...prev,
				[name]: type === 'checkbox' ? checked : value
			}));
		}

		if (errors[name]) {
			setErrors(prev => ({ ...prev, [name]: '' }));
		}
	};

	const addGuest = () => {
		setAdditionalGuests([...additionalGuests, {
			firstName: '',
			surname: '',
			ageCategory: 'adult',
			dietaryRequirements: '',
			flower: ''
		}]);
	};

	const removeGuest = (index) => {
		setAdditionalGuests(additionalGuests.filter((_, i) => i !== index));
	};

	const handleGuestChange = (index, field, value) => {
		const updatedGuests = [...additionalGuests];
		updatedGuests[index][field] = value;
		setAdditionalGuests(updatedGuests);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			// TODO: Replace with actual Google Apps Script URL
			const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyXw2Ms_uidqWhVma3ip-f9ZogrRjrXEWDHPDZ01B9xiRSmVheFmTo5wFcqx1G8AgNQ/exec';

			const response = await fetch(GOOGLE_SCRIPT_URL, {
				method: 'POST',
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...formData,
					additionalGuests: additionalGuests
				})
			});

			setSubmitStatus('success');
			setFormData({
				firstName: '',
				surname: '',
				email: '',
				phone: '',
				attending: '',
				venueStay: false,
				wantsBreakfast: false,
				roomChoice1: '',
				roomChoice2: '',
				roomChoice3: '',
				requiresAccessibleRoom: false,
				requiresMultipleRooms: false,
				flower: '',
				dietaryRequirements: '',
				songSuggestion: '',
				additionalNotes: ''
			});
			setAdditionalGuests([]);
		} catch (error) {
			console.error('Form submission error:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

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
							<span className="contact-name">Renatta Olejarz</span>
							<a href="tel:+48783191264" className="contact-phone">+48 783 191 264</a>
						</div>
					</div>
				</div>

				<form onSubmit={handleSubmit} className="rsvp-form" noValidate>
					<h3 className="form-section-title">Main Contact</h3>

					<div className="form-row">
						<div className="form-group">
							<label htmlFor="firstName">
								First Name <span className="required">*</span>
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								className={errors.firstName ? 'error' : ''}
								required
							/>
							{errors.firstName && (
								<span className="error-message">{errors.firstName}</span>
							)}
						</div>

						<div className="form-group">
							<label htmlFor="surname">
								Surname <span className="required">*</span>
							</label>
							<input
								type="text"
								id="surname"
								name="surname"
								value={formData.surname}
								onChange={handleChange}
								className={errors.surname ? 'error' : ''}
								required
							/>
							{errors.surname && (
								<span className="error-message">{errors.surname}</span>
							)}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="attending">
							Will you be attending? <span className="required">*</span>
						</label>
						<select
							id="attending"
							name="attending"
							value={formData.attending}
							onChange={handleChange}
							className={errors.attending ? 'error' : ''}
							required
						>
							<option value="">Please select...</option>
							<option value="yes">I will be attending</option>
							<option value="evening">I will be attending the evening only</option>
							<option value="no">I won't be attending</option>
						</select>
						{errors.attending && (
							<span className="error-message">{errors.attending}</span>
						)}
					</div>

					{(formData.attending === 'yes' || formData.attending === 'evening') && (
						<>
							<div className="form-group">
								<label htmlFor="email">
									Email <span className="required">*</span>
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className={errors.email ? 'error' : ''}
									required
								/>
								{errors.email && (
									<span className="error-message">{errors.email}</span>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="phone">
									Phone Number <span className="required">*</span>
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className={errors.phone ? 'error' : ''}
									placeholder="e.g., 07123 456789"
									required
								/>
								{errors.phone && (
									<span className="error-message">{errors.phone}</span>
								)}
							</div>

					<div className="form-group checkbox-group">
						<label className="checkbox-label">
							<input
								type="checkbox"
								name="venueStay"
								checked={formData.venueStay}
								onChange={handleChange}
							/>
							<span>I would like to stay at the venue</span>
						</label>
					</div>

					{formData.venueStay && (
						<div className="accommodation-section">
							<h3 className="form-section-title">Accommodation Preferences</h3>
							
							<div className="form-group checkbox-group">
								<label className="checkbox-label">
									<input
										type="checkbox"
										name="wantsBreakfast"
										checked={formData.wantsBreakfast}
										onChange={handleChange}
									/>
									<span>I would like breakfast</span>
								</label>
							</div>

							<div className="form-group">
								<label>Room Preferences</label>
								<p className="field-instruction">
									Please enter your top 3 room choices from the room list provided in the venue information section above.
								</p>
								
								<div className="room-choices">
									<div className="form-group">
										<label htmlFor="roomChoice1">First Choice</label>
										<input
											type="text"
											id="roomChoice1"
											name="roomChoice1"
											value={formData.roomChoice1}
											onChange={handleChange}
											placeholder="Enter room name"
										/>
									</div>

									<div className="form-group">
										<label htmlFor="roomChoice2">Second Choice</label>
										<input
											type="text"
											id="roomChoice2"
											name="roomChoice2"
											value={formData.roomChoice2}
											onChange={handleChange}
											placeholder="Enter room name"
										/>
									</div>

									<div className="form-group">
										<label htmlFor="roomChoice3">Third Choice</label>
										<input
											type="text"
											id="roomChoice3"
											name="roomChoice3"
											value={formData.roomChoice3}
											onChange={handleChange}
											placeholder="Enter room name"
										/>
									</div>
								</div>
							</div>

							<div className="form-group checkbox-group">
								<label className="checkbox-label">
									<input
										type="checkbox"
										name="requiresAccessibleRoom"
										checked={formData.requiresAccessibleRoom}
										onChange={handleChange}
									/>
									<span>I require an accessible room</span>
								</label>
							</div>

							<div className="form-group checkbox-group">
								<label className="checkbox-label">
									<input
										type="checkbox"
										name="requiresMultipleRooms"
										checked={formData.requiresMultipleRooms}
										onChange={handleChange}
									/>
									<span>I require more than one room</span>
								</label>
								<p className="field-note">If checked, we will contact you to discuss your requirements.</p>
							</div>
						</div>
					)}

					<div className="form-group">
						<label htmlFor="flower">
							Corsage or Boutonniere
						</label>
						<select
							id="flower"
							name="flower"
							value={formData.flower}
							onChange={handleChange}
						>
							<option value="">Please select...</option>
							<option value="corsage">Corsage</option>
							<option value="boutonniere">Boutonniere</option>
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="dietaryRequirements">
							Dietary Requirements
						</label>
						<textarea
							id="dietaryRequirements"
							name="dietaryRequirements"
							value={formData.dietaryRequirements}
							onChange={handleChange}
							rows="4"
							placeholder="Please let us know of any dietary requirements or allergies"
						></textarea>
					</div>

					<div className="additional-guests-section">
						<div className="additional-guests-header">
							<h3>Additional Guests</h3>
							<button
								type="button"
								className="add-guest-button"
								onClick={addGuest}
							>
								+ Add Guest
							</button>
						</div>

						{additionalGuests.map((guest, index) => (
							<div key={index} className="guest-item">
								<div className="guest-header">
									<h4>Guest {index + 1}</h4>
									<button
										type="button"
										className="remove-guest-button"
										onClick={() => removeGuest(index)}
									>
										Remove
									</button>
								</div>
								<div className="form-row">
									<div className="form-group">
										<label htmlFor={`guest-firstname-${index}`}>
											First Name
										</label>
										<input
											type="text"
											id={`guest-firstname-${index}`}
											value={guest.firstName}
											onChange={(e) => handleGuestChange(index, 'firstName', e.target.value)}
											placeholder="First name"
										/>
									</div>
									<div className="form-group">
										<label htmlFor={`guest-surname-${index}`}>
											Surname
										</label>
										<input
											type="text"
											id={`guest-surname-${index}`}
											value={guest.surname}
											onChange={(e) => handleGuestChange(index, 'surname', e.target.value)}
											placeholder="Surname"
										/>
									</div>
								</div>

								<div className="form-group">
									<label htmlFor={`guest-age-category-${index}`}>
										Age Category
									</label>
									<select
										id={`guest-age-category-${index}`}
										value={guest.ageCategory}
										onChange={(e) => handleGuestChange(index, 'ageCategory', e.target.value)}
									>
										<option value="adult">Adult</option>
										<option value="child">Child</option>
									</select>
								</div>

								<div className="form-group">
									<label htmlFor={`guest-dietary-${index}`}>
										Dietary Requirements
									</label>
									<textarea
										id={`guest-dietary-${index}`}
										value={guest.dietaryRequirements}
										onChange={(e) => handleGuestChange(index, 'dietaryRequirements', e.target.value)}
										rows="3"
										placeholder="Any dietary requirements or allergies"
									></textarea>
								</div>

								<div className="form-group">
									<label htmlFor={`guest-flower-${index}`}>
										Corsage or Boutonniere
									</label>
									<select
										id={`guest-flower-${index}`}
										value={guest.flower}
										onChange={(e) => handleGuestChange(index, 'flower', e.target.value)}
									>
										<option value="">Please select...</option>
										<option value="corsage">Corsage</option>
										<option value="boutonniere">Boutonniere</option>
									</select>
								</div>
							</div>
						))}
					</div>

					<div className="form-group">
						<label htmlFor="songSuggestion">
							Song Suggestion
						</label>
						<input
							type="text"
							id="songSuggestion"
							name="songSuggestion"
							value={formData.songSuggestion}
							onChange={handleChange}
							placeholder="Suggest a song for the reception"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="additionalNotes">
							Additional Notes
						</label>
						<textarea
							id="additionalNotes"
							name="additionalNotes"
							value={formData.additionalNotes}
							onChange={handleChange}
							rows="4"
							placeholder="Any other information we need to know about?"
						></textarea>
					</div>
						</>
					)}

					<div className="form-group checkbox-group">
						<label className="checkbox-label">
							<input
								type="checkbox"
								required
							/>
							<span>
								I agree to the collection and use of my personal information as described in the{' '}
								<a 
									href="#privacy" 
									style={{color: '#333', textDecoration: 'underline', cursor: 'pointer'}}
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' });
										// Small delay to let scroll finish, then click the button if it's not expanded
										setTimeout(() => {
											const privacyButton = document.querySelector('.privacy-toggle');
											if (privacyButton && privacyButton.getAttribute('aria-expanded') === 'false') {
												privacyButton.click();
											}
										}, 500);
									}}
								>
									Privacy Statement
								</a>
							</span>
						</label>
					</div>

					<button
						type="submit"
						className="submit-button"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Submitting...' : 'Submit RSVP'}
					</button>

					{submitStatus === 'success' && (
						<div className="status-message success">
							Thank you! Your RSVP has been submitted successfully.
						</div>
					)}

					{submitStatus === 'error' && (
						<div className="status-message error">
							There was an error submitting your RSVP. Please try again.
						</div>
					)}
				</form>
			</div>
		</section>
	);
}

export default RSVPForm;
