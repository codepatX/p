import React from 'react';
import './bookOnline.css';
import ScrollTop from '../scroll/ScrollTop';


function BookOnline() {
    return (
        <>
        <div id="book-online" className="book-online">
            <h2>Book an Appointment</h2>
            <form className="booking-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="service">Service</label>
                    <select id="service" name="service" required>
                        <option value="">Select a service</option>
                        <option value="skin-care">Skin Care</option>
                        <option value="makeup">Makeup</option>
                        <option value="bridal">Bridal</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Preferred Time</label>
                    <input type="time" id="time" name="time" required />
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea id="notes" name="notes" rows="4"></textarea>
                </div>
                <button type="submit" className="submit-btn">Book Now</button>
            </form>
        </div>
        <ScrollTop/>
        </>
    );
}

export default BookOnline;
