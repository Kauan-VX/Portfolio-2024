import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components";

const EmailTemplate = ({
  name,
  message,
}: {
  name: string;
  message: string;
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-black my-12 mx-auto font-sans rounded-xl">
          <Container className="p-8 rounded-lg shadow-lg">
            <Img
              className="mx-auto w-32 p-2 object-cover"
              src="https://i.postimg.cc/v82FtPc6/logo-portfolio.png"
            />
            <Text className="text-xl font-medium text-white">{name}</Text>
            <Text className="text-lg  text-white">{message}</Text>

            <Container className="text-center ">
              <Button
                className="bg-[#8a00c2] rounded-lg  text-white p-3 font-bold "
                href="https://resend.com/overview"
              >
                Acompanhar envio de email(s)
              </Button>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
