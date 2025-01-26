import { Html } from "@react-email/components";

type Props = {
  fullName: string;
  partnerFullName: string;
  childrenNumber: number;
  email: string;
  phoneNumber: string;
  message: string;
};

const EmailTemplate = ({
  fullName,
  partnerFullName,
  childrenNumber,
  email,
  message,
  phoneNumber,
}: Props) => {
  return (
    <Html>
      <h1>Ich bin dann mal dabei!</h1>
      <p>
        <strong>Full Name:</strong> {fullName}
      </p>
      <p>
        <strong>Partner Full Name:</strong> {partnerFullName}
      </p>
      <p>
        <strong>Children:</strong> {childrenNumber}
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
