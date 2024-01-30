import { useEffect, useState } from "react";
import { ScreenContainer } from "../../components";
import { send as emailJsSend } from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { clsx } from "clsx";

export const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState<"success" | "error">(
    "success"
  );
  const [messageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    let messageTimeout: number | undefined;

    if (messageVisible) {
      messageTimeout = setTimeout(() => {
        setMessageVisible(false);
      }, 5000);
    }

    return () => {
      clearTimeout(messageTimeout);
    };
  }, [messageVisible]);

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
      setMessageStatus("success");
    } catch (err) {
      console.log(err);
      setMessageStatus("error");
    } finally {
      setMessageVisible(true);
    }
  };

  return (
    <ScreenContainer>
      <div className="flex flex-col px-40 pb-24 grow items-center">
        <div className="max-w-lg mx-auto w-full">
          <h1 className="text-center text-dark-green text-5xl font-bold leading-none mb-12">
            Get in touch!
          </h1>
          <form
            className="grid grid-cols-2 text-2xl gap-6 relative"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label htmlFor="name-input">Name *</label>
              <input
                id="name-input"
                type="text"
                name="contact_name"
                value={contactName}
                autoComplete="name"
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
                autoComplete="organization"
                value={contactCompany}
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
                autoComplete="email"
                value={contactEmail}
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
                value={contactMessage}
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

            <div
              className={clsx(
                "absolute top-full mt-12 right-0 px-12 py-4 text-center rounded-2xl transition-all duration-500",
                {
                  "bg-dark-green": messageStatus === "success",
                  "bg-error": messageStatus === "error",
                  "opacity-0": !messageVisible,
                  "opacity-100": messageVisible,
                }
              )}
            >
              <p className="text-lg text-white">
                {messageStatus === "success" && "Message sent successfully!"}
                {messageStatus === "error" &&
                  "Something went wrong. Please try again later."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </ScreenContainer>
  );
};
