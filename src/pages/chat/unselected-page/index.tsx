import ChatLayout from "../layouts";
import Icon from "common/components/icons";
import { useAppTheme } from "common/theme";
import { Container, ImageWrapper, Title, IconWrapper, Link, Image, Text } from "./styles";

export default function UnSelectedChatPage() {
  const theme = useAppTheme();

  const getImageURL = () => {
    if (theme.mode === "light") return "/assets/images/entry-image-light.webp";
    return "/assets/images/entry-image-dark.png";
  };

  return (
    <ChatLayout>
      <Container>
        <ImageWrapper>
          <Image src={getImageURL()} />
        </ImageWrapper>
        <Title> WhatsApp Web </Title>
        <Text>
          Send and receive messages without keeping your phone online. <br />
        
        </Text>
        <Text>
          <span>Built by</span>{" "}
          <Link target="_blank" href="https://github.com/yash1raj234">
            Yashraj Rai
          </Link>
          <IconWrapper>
            <Icon id="heart" />
          </IconWrapper>
        </Text>
      </Container>
    </ChatLayout>
  );
}
