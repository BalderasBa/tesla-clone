import React, { useState } from "react";
import styled from "styled-components";
import { InfoOutlined, LanguageOutlined } from "@material-ui/icons";

import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.svg";

function Signup() {
  const recaptchaRef = React.createRef();
  const onSubmit = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
  };
  return (
    <div>
      <Head>
        <a href="/">
          <img src={logo} alt="logo" />
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
          <h1>Sign Up</h1>
        </Or>
        <Form>
          <Input>
            <label htmlFor="select-market">Select Market</label>
            <select id="select-market">
              <optgroup label="North America">
                <option>USA</option>
                <option>Canada</option>
                <option>Mexico</option>
              </optgroup>
              <optgroup label="Europe">
                <option>UK</option>
                <option>Italia</option>
                <option>Germany</option>
                <option>France</option>
                <option>Other in Europe</option>
              </optgroup>
              <optgroup label="Asia">
                <option>Japan</option>
                <option>Saudi Arabia</option>
                <option>China</option>
                <option>Qatar</option>
              </optgroup>
              <optgroup label="Africa">
                <option>Algeria</option>
                <option>South Africa</option>
                <option>Egypt</option>
              </optgroup>
            </select>
          </Input>
          <Input>
            <label htmlFor="select-lang">
              Select Language
              <span>
                <CustumHelp />
              </span>
              <p>
                Please chose your preferred language for Tesla commumications.
                Tesla will use this language when sending required emails.
              </p>
            </label>
            <input type="text" id="select-lang" disabled value="English" />
          </Input>
          <Input>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />
          </Input>
          <Input>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />
          </Input>
          <Input>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" />
          </Input>

          <Input>
            <label htmlFor="password">
              Password
              <span>
                <CustumHelp />
              </span>
              <p>
                Please inter a valide password that has a minimum of eigth
                characters. Password must have at least one number and one
                letter.
              </p>
            </label>
            <input type="email" id="password" />
          </Input>

          <Input>
            <a href="#">Create account</a>
          </Input>
        </Form>
        <FormCheck>
          <div className="check-box">
            <input type="checkbox" name="" id="privacy" />
            <label htmlFor="privacy">
              By creating a Tesla Account, I understand and agree to Tesla's
              <a href=""> Privacy Notice</a> and <a href="">Terms of Use</a>
            </label>
          </div>
          <form onSubmit={onSubmit}>
            <ReCAPTCHA ref={recaptchaRef} sitekey="Your client site key" />
          </form>
        </FormCheck>
        <Or>
          <hr />
          Or
          <hr />
        </Or>
        <Form>
          <CreateAcount>
            <a href="/">Sign In</a>
          </CreateAcount>
        </Form>
      </Container>
      <Footer />
    </div>
  );
}
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
const Container = styled.div`
  user-select: none;
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
const CustumHelp = styled(InfoOutlined)`
  cursor: pointer;
  transition: 250ms;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FormCheck = styled(Form)`
  margin: 20px 0;
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 10px;
  }
  .check-box {
    display: flex;
    label {
      width: 250px;
      text-align: left;
      a {
        text-decoration: underline;
      }
    }
  }
  form {
    margin: 20px;
  }
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
    }
    span {
      margin-left: 10px;

      &:hover + p {
        display: block;
        height: auto;
      }
    }
  }
  select,
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

export default Signup;
