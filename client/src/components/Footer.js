import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/fontawesome-free-brands';

function Footer() {
  return (
    <FooterLayout>
      <FooterTextBox>
        <LogoBox>
          <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        </LogoBox>
        <Col>
          <ul>
            <div className="title">STACK OVERFLOW</div>
            <li>Questions</li>
            <li>Help</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <div className="title">PRODUCTS</div>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <div className="title">COMPANY</div>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <div className="title">STACK EXCHANGE NETWORK</div>
            <li>Technology</li>
            <li>Culture & recreation</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <li className="hr">안보이지</li>
            <li>API</li>
            <li>Data</li>
          </ul>
        </Col>
        <SocialBox>
          <ul>
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Instagram</li>
          </ul>
          <div className="license">
            <p>
              Site design / logo © 2022 Stack Exchange Inc; <br />
              user contributions licensed under CC BY-SA. rev 2022.9.1.42957
            </p>
          </div>
        </SocialBox>
      </FooterTextBox>
    </FooterLayout>
  );
}

export default Footer;

const FooterLayout = styled.div`
  background-color: #414141;
  width: 100%;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const FooterTextBox = styled.div`
  top: 0;
  bottom: 0;
  width: 90%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
const LogoBox = styled.div`
  color: #bebebe;
`;

const Col = styled.div`
  .title {
    color: #e5e5e5;
    font-size: 13px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  li {
    color: #bebebe;
    font-size: 12px;
    padding: 5px 0;
  }

  .hr {
    color: #414141;
  }
`;

const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #bebebe;
  font-size: 12px;

  ul {
    display: flex;
    column-gap: 10px;
  }

  .license {
  }
`;
