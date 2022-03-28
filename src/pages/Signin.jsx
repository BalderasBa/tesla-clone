import React, { useState } from "react";
import styled from "styled-components";
import { InfoOutlined, LanguageOutlined } from "@material-ui/icons";

import Footer from "../components/Footer";

function Signin() {
  const [emailvalid, setEmailvalid] = useState(false);
  const [hreff, setHreff] = useState(false);
  return (
    <div>
      <Head>
        <a href="/">
          <img src="./images/logo.svg" alt="logo" />
        </a>
        <Langue>
          <LanguageOutlined />
          <select name="" id="">
            <option value="en_US">English (English)</option>
            <option value="ar_AE">العربية (Arabic)</option>
            <option value="fr_FR">Français (French)</option>
          </select>
        </Langue>
      </Head>
      <Container>
        <Or>
          <h1>Sign In</h1>
        </Or>
        <Form>
          <Input>
            <label htmlFor="email">
              Email Address
              <span>
                <CustumHelp />
              </span>
              <p>
                If your account is linked to an email adress you no longer have
                accessto, please sign into your account and update your email
                adress under account settings.
                <br />
                If you have trouble signing in, please visit our
                <span>support page</span>
              </p>
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g: your.email@gmail.com"
            />
          </Input>
          {emailvalid && (
            <Input>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" />
            </Input>
          )}
          <Input>
            <a
              href={hreff ? "/home" : "#"}
              onClick={() => {
                setEmailvalid(true);
                setTimeout(() => {
                  setHreff(true);
                }, 200);
              }}
            >
              {!hreff ? "Next" : "Sign In"}
            </a>
          </Input>
          <Forgot>
            <a href="#">Forgot email?</a>
            <a href="#">Forgot password?</a>
          </Forgot>
        </Form>
        <Or>
          <hr />
          Or
          <hr />
        </Or>
        <Form>
          <CreateAcount>
            <a href="/signup">Create Account</a>
          </CreateAcount>
        </Form>
      </Container>
      <Footer />
    </div>
  );
}
const Container = styled.div`
  user-select: none;
  height: 91vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.5px;
  }
`;
const Langue = styled.div`
  display: flex;
  background-color: #0001;
  padding: 5px 10px;
  border-radius: 5px;
`;
const Head = styled.div`
  display: flex;
  margin: 0 30px;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  select {
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 3px;
  }
`;
const CustumHelp = styled(InfoOutlined)`
  cursor: pointer;
  transition: 250ms;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CreateAcount = styled.div`
  width: 100%;
  a {
    background-color: #fff;
    color: #000;
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid #000;
    text-align: center;
    display: block;
    width: 100%;
    transition: 200ms ease-in;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  label {
    color: #5c5d61;
    font-size: 14px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    margin-bottom: 5px;
    p {
      position: absolute;
      left: 45%;
      top: 36%;
      background-color: #fff;
      width: 400px;
      padding: 15px;
      font-size: 13px;
      line-height: 17px;
      border-radius: 10px;
      box-shadow: -1px 1px 3px 1px #3457b2;
      height: 0;
      display: none;
      text-align: left;
      span {
        text-decoration: underline;
      }
    }
    span {
      margin-left: 10px;

      &:hover + p {
        display: block;
        height: auto;
      }
    }
  }
  input {
    outline: none;
    border: none;
    display: block;
    font-size: 15px;
    line-height: 20px;
    background-color: #0001;
    font-weight: 500;
    color: #000;
    border-radius: 20px;
    height: 40px;
    width: 320px;
    padding: 10px 20px;
    margin-bottom: 25px;
    &:active,
    &:focus {
      border: 1px solid #0004;
    }
  }

  a {
    background-color: #3d69e1;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    text-align: center;
    display: block;
    width: 100%;
    text-transform: uppercase;
    transition: 200ms ease-in;
    &:hover {
      background-color: #3457b2;
    }
  }
`;
const Forgot = styled.div`
  margin: 10px 0 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  a {
    width: 100%;
    font-size: 12px;
    text-align: center;
    text-decoration: underline;
    margin-right: 10px;
  }
`;
const Or = styled.span`
  color: #5c5d61;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin: 20px auto;
  white-space: nowrap;
  width: 100%;
  hr {
    margin: 0 5px;
    width: 10%;
  }
`;

export default Signin;
// export Head;//how to export it
