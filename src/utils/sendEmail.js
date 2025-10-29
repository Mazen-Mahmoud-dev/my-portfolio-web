import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return { success: true, result };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};
