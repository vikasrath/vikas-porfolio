const sendMail = async (userData) => {
    const serviceId = "service_7jz4ehr";
    const templateId = "template_9xxndli";
    const publicKey = "EOonM8mjwQrqaZtuI";

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            name: userData.name,
            email: userData.email,
            message: userData.message,
        },
    };

    try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Your mail has been sent successfully!");
        } else {
            alert("Failed to send mail. Please try again.");
        }
    } catch (error) {
        alert("Oops... Something went wrong: " + error.message);
    }
};

export default sendMail;
