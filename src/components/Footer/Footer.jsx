import { FooterBox, FooterContainer, Link } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <p>Created By</p>
        <Link
          href="https://github.com/jujalei"
          target="_blank"
          rel="noreferrer"
        >
          Yuliia Yaremchuk
        </Link>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
