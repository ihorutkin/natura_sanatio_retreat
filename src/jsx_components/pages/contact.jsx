import React, { useState } from "react";
import emailjs from "emailjs-com";
import Layout from '../layout/layout';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        goals: {
        loseWeight: "No",
        improveStrength: "No",
        rebuildSelf: "No",
        fullRest: "No",
        healthIssues: "No",
        skinHealth: "No",
        newSkills: "No",
        innerPower: "No",
        wholePackage: "No",
        },
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("goal_")) {
        const goalName = name.replace("goal_", "");
        setFormData({
            ...formData,
            goals: { ...formData.goals, [goalName]: value },
        });
        } else {
        setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
        .send(
            "service_vag8m3i",
            "template_gcao00b",
            {
            ...formData,
            loseWeight: formData.goals.loseWeight,
            improveStrength: formData.goals.improveStrength,
            rebuildSelf: formData.goals.rebuildSelf,
            fullRest: formData.goals.fullRest,
            healthIssues: formData.goals.healthIssues,
            skinHealth: formData.goals.skinHealth,
            newSkills: formData.goals.newSkills,
            innerPower: formData.goals.innerPower,
            wholePackage: formData.goals.wholePackage,
            },
            "NBa1VUa5ii7L1qoQ4"
        )
        .then(
            () => {
            setStatus("Message was sent");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                goals: {
                loseWeight: "No",
                improveStrength: "No",
                rebuildSelf: "No",
                fullRest: "No",
                healthIssues: "No",
                skinHealth: "No",
                newSkills: "No",
                innerPower: "No",
                wholePackage: "No",
                },
            });
            },
            (error) => {
            setStatus("Sending error: " + error.text);
            }
        );
    };
    return (
        <Layout>
            <div style={{ maxWidth: "400px", margin: "8rem auto 4rem auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h2 style={{ textAlign: "center" }}>Contact with us</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <input
                        name="firstName"
                        placeholder="Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                    <input
                        name="lastName"
                        placeholder="Surname"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />

                    {Object.entries({
                        loseWeight: "I want to lose weight",
                        improveStrength: "I want to improve my body’s strength and flexibility",
                        rebuildSelf: "I want to rediscover/rebuild myself",
                        fullRest: "I just want to get full rest and recover from my routine",
                        healthIssues: "I have some health issues",
                        skinHealth: "I want to restore my skin’s health and beauty",
                        newSkills: "I want to gain new skills and knowledge",
                        innerPower: "I want to discover where my inner power lies",
                        wholePackage: "I need a whole package",
                    }).map(([key, label]) => (
                        <div key={key} style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ marginBottom: "5px" }}>{label}</label>
                            <select
                            name={`goal_${key}`}
                            value={formData.goals[key]}
                            onChange={handleChange}
                            style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                            >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                            </select>
                        </div>
                    ))}

                    <button type="submit" style={{ padding: "12px", background: "#007bff", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}>
                        Send
                    </button>
                </form>
                {status && <p style={{ marginTop: "10px", textAlign: "center", color: "green" }}>{status}</p>}
            </div>
        </Layout>
    );
};

export default ContactForm;

