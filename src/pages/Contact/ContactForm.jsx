import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/common/Button/Button.jsx";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  guests: "",
  preferredContact: "Email",
  message: "",
};

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.eventType) {
    errors.eventType = "Please choose an event type.";
  }

  if (!values.eventDate) {
    errors.eventDate = "Please choose an event date.";
  }

  if (!values.guests) {
    errors.guests = "Please enter an estimated guest count.";
  }

  if (!values.message.trim()) {
    errors.message = "Please share a little about the cake.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitted(true);
      setValues(initialValues);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <Field
          label="Full Name"
          name="fullName"
          value={values.fullName}
          error={errors.fullName}
          onChange={handleChange}
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
        <label className="field">
          <span>Event Type</span>
          <select
            name="eventType"
            value={values.eventType}
            onChange={handleChange}
            aria-invalid={Boolean(errors.eventType)}
          >
            <option value="">Select one</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Baby celebration</option>
            <option>Dessert table</option>
            <option>Custom event</option>
          </select>
          {errors.eventType ? <em role="alert">{errors.eventType}</em> : null}
        </label>
        <Field
          label="Event Date"
          name="eventDate"
          type="date"
          value={values.eventDate}
          error={errors.eventDate}
          onChange={handleChange}
        />
        <Field
          label="Number of Guests"
          name="guests"
          type="number"
          min="1"
          value={values.guests}
          error={errors.guests}
          onChange={handleChange}
        />
        <label className="field">
          <span>Preferred Contact Method</span>
          <select name="preferredContact" value={values.preferredContact} onChange={handleChange}>
            <option>Email</option>
            <option>Phone</option>
            <option>WhatsApp</option>
          </select>
        </label>
        <label className="field field--full">
          <span>Message</span>
          <textarea
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            placeholder="Tell us about the occasion, palette, flavors, and any design details you already love."
          />
          {errors.message ? <em role="alert">{errors.message}</em> : null}
        </label>
      </div>

      {isSubmitted ? (
        <p className="form-success" role="status">
          Thank you. Your inquiry has been prepared and we will be in touch soon.
        </p>
      ) : null}

      <Button type="submit" variant="primary" icon={<ArrowRight size={18} />}>
        Send Inquiry
      </Button>
    </form>
  );
}

function Field({ label, name, type = "text", value, error, onChange, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {error ? <em role="alert">{error}</em> : null}
    </label>
  );
}
