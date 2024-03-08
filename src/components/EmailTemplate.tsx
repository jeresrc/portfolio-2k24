interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({name, email, message}: EmailTemplateProps) {
  return (
    <html lang="en">
      <h1>New Form Submission</h1>
      <p>You just submitted a form. Here are the details:</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </html>
  );
}
