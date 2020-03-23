import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./navbar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    font-display: fallback;
    color: #DDD;
  }

  html {
    background-color: #2A2E38;
  }

  a {
    color: #15DCD1;
  }

`;

const Container = styled.div<Props>`
  margin: 0 auto;
  max-width: ${props => props.maxWidth || "960px"};
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;
`;

const Footer = styled.footer<Props>`
  font-family: "Roboto Mono";
  text-align: center;
  position: relative;
  z-index: 10;

  ${props =>
    !props.hideFade
      ? `&:after {
    z-index: 5;
    content: "";
    position: absolute;
    displat: block;
    height: 200px;
    top: -150px;
    left: -15px;
    width: 110px;
    background: linear-gradient(to bottom, #2a2e3800 0%, #2a2e38ff 100%);

    @media screen and (max-width: 1000px) {
      width: 40px;
    }
  }`
      : ""}
`;

interface Props {
  maxWidth?: string;
  hideFade?: boolean;
}

const Layout: React.FC<Props> = props => {
  return (
    <>
      <GlobalStyle />
      <Navbar siteTitle={"Developer Deep Dives"} />
      <Container maxWidth={props.maxWidth}>
        {props.children}
        <Footer hideFade={props.hideFade}>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://nextjs.org">Next</a>
        </Footer>
      </Container>
    </>
  );
};

export default Layout;
