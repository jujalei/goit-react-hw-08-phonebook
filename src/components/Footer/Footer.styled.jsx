import styled from '@emotion/styled';

const FooterBox = styled.div`
  font-family: 'Poppins';
  max-width: 960px;
  margin: 0 auto;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
`;

const FooterContainer = styled.footer`
  background: linear-gradient(
    0deg,
    rgba(148, 187, 233, 1) 0%,
    rgba(205, 184, 223, 1) 48%,
    rgba(255, 182, 214, 0.4990371148459384) 100%
  );
  padding-top: 12px;
  padding-bottom: 12px;
  color: black;
`;

const Link = styled.a`
  text-decoration: underline;
  color: black;
  &:hover {
    color: #d53f8c;
  }
`;

export { FooterBox, FooterContainer, Link };
