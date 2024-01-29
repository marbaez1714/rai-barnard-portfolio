import { useState } from "react";
import { ScreenContainer } from "../../components";
import { send as emailJsSend } from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleInputChange = (
    input: "name" | "company" | "email" | "message",
    value: string
  ) => {
    switch (input) {
      case "name":
        setContactName(value);
        break;
      case "company":
        setContactCompany(value);
        break;
      case "email":
        setContactEmail(value);
        break;
      case "message":
        setContactMessage(value);
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    try {
      const captcha = await executeRecaptcha();
      const { status } = await emailJsSend(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        {
          email: contactEmail.trim(),
          name: contactName.trim(),
          subject: `${contactName} ${
            contactCompany ? ` (${contactCompany})` : ""
          }`.trim(),
          company: contactCompany.trim() || "N/A",
          message: contactMessage.trim(),
          "g-recaptcha-response": captcha,
        }
      );

      if (status === 400) {
        throw new Error("failed to send message");
      }

      setContactName("");
      setContactCompany("");
      setContactEmail("");
      setContactMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScreenContainer>
      <div className="flex flex-col px-40 grow items-center">
        <div className="max-w-lg mx-auto w-full">
          <h1 className="text-center text-dark-green text-5xl font-bold leading-none mb-12">
            Get in touch!
          </h1>
          <form
            className="grid grid-cols-2 text-2xl gap-6"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label htmlFor="name-input">Name *</label>
              <input
                id="name-input"
                type="text"
                name="contact_name"
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company-input">Company</label>
              <input
                id="company-input"
                type="text"
                name="contact_company"
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="col-span-2">
              <label htmlFor="email-input">Email *</label>
              <input
                id="email-input"
                type="email"
                name="contact_email"
                className="w-full"
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            {/* Message */}
            <div className="col-span-2">
              <label htmlFor="message-input">Message *</label>
              <textarea
                className="w-full"
                id="message-input"
                name="contact_message"
                rows={6}
                required
                onChange={(e) => handleInputChange("message", e.target.value)}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="col-span-2 mt-6 px-12 py-4 text-2xl max-w-80 w-full ml-auto rounded-2xl gradient-transition shadow-link-button bg-link-button before:shadow-link-button-hover before:bg-link-button-hover"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </ScreenContainer>
  );
};
