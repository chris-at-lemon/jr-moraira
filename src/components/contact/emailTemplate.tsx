import { Html } from "@react-email/components";

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phoneNumber: string;
};

const EmailTemplate = ({
  firstName,
  lastName,
  email,
  message,
  phoneNumber,
}: Props) => {
  return (
    <Html>
      <h1>Ich bin dann mal dabei!</h1>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
    </Html>
  );
};

export default EmailTemplate;
