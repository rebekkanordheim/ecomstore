import React, { useState } from 'react';

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    function onFormSubmit(event) {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            subject,
            email,
            body,
        };
        console.log(formData);

        fetch('https://v2.api.noroff.dev/online-shop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(response => {
            if (response.ok) {
                alert('Form submitted successfully!');
                setFirstName('');
                setLastName('');
                setSubject('');
                setEmail('');
                setBody('');
            } else {
                alert('Failed to submit form. Please try again later.');
            }
        }).catch(error => {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again later.');
        });
    }

    function onFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function onLastNameChange(event) {
        setLastName(event.target.value);
    }

    function onSubjectChange(event) {
        setSubject(event.target.value);
    }

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function onBodyChange(event) {
        setBody(event.target.value);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit} className="contact-form">
                <label htmlFor="first-name">First name</label>
                <input
                    name="first-name"
                    value={firstName}
                    placeholder="Your first name"
                    onChange={onFirstNameChange}
                    required
                    minLength={3}
                    className="form-input"
                />

                <label htmlFor="last-name">Last name</label>
                <input
                    name="last-name"
                    value={lastName}
                    placeholder="Your last name"
                    onChange={onLastNameChange}
                    required
                    minLength={3}
                    className="form-input"
                />

                <label htmlFor="subject">Subject</label>
                <input
                    name="subject"
                    value={subject}
                    placeholder="Subject"
                    onChange={onSubjectChange}
                    required
                    minLength={3}
                    className="form-input"
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Your email"
                    onChange={onEmailChange}
                    required
                    className="form-input"
                />

                <label htmlFor="body">Body</label>
                <textarea
                    name="body"
                    value={body}
                    placeholder="Your message"
                    onChange={onBodyChange}
                    required
                    minLength={3}
                    className="form-textarea"
                />

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;