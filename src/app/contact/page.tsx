"use client";

import { useEffect, useState } from "react";
import "../styles/form.css";
import ModalForm from "../components/Modal";

interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
    terms: boolean;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        terms: false,
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (field: keyof FormData, value: string | boolean) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.terms) {
            alert("Please accept the terms and policies.");
            return;
        }
        simulateFormSubmission();
    };

    const simulateFormSubmission = () => {
        setTimeout(() => {
            setShowModal(true);
            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                message: "",
                terms: false,
            });
        }, 1000);
    };

    return (
        <main>
            <h1 className="mx-auto mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="controls">
                        <div className="form-control">
                            <label htmlFor="first-name">First name</label>
                            <input
                                type="text"
                                id="first-name"
                                name="first-name"
                                placeholder="John"
                                value={formData.firstName}
                                onChange={(e) =>
                                    handleChange("firstName", e.target.value)
                                }
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="last-name">Last Name</label>
                            <input
                                type="text"
                                id="last-name"
                                name="last-name"
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={(e) =>
                                    handleChange("lastName", e.target.value)
                                }
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="test@mail.com"
                                value={formData.email}
                                onChange={(e) =>
                                    handleChange("email", e.target.value)
                                }
                            />
                            <span className="error-message">
                                *Email should contain domain and @:
                                example@gmail.com
                            </span>
                        </div>
                        <div className="form-control">
                            <label htmlFor="phone">
                                Phone number (Optional)
                            </label>
                            <input
                                type="tel"
                                name="phoneNum"
                                id="phone"
                                placeholder="+380(99)444-44-42"
                                pattern="[\+]\d{3}[\(]\d{2}[\)]\d{3}[\-]\d{2}[\-]\d{2}"
                                value={formData.phone}
                                onChange={(e) =>
                                    handleChange("phone", e.target.value)
                                }
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                cols={14}
                                rows={5}
                                id="message"
                                value={formData.message}
                                onChange={(e) =>
                                    handleChange("message", e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className="form-checkbox">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={formData.terms}
                            onChange={() =>
                                handleChange("terms", !formData.terms)
                            }
                        />
                        <label htmlFor="terms">I agree on user terms</label>
                    </div>
                </div>
                <div className="button-section">
                    <button type="submit">Send request</button>
                </div>
            </form>
            <ModalForm show={showModal} onHide={() => setShowModal(false)} />
        </main>
    );
}
