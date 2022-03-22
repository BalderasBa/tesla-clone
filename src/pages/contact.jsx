import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />
      <Container>
        <div style={{ margin: "30px 0" }}>
          <h3>Submit a question or comment</h3>
          <p>
            Many common questions are answered on our Blog and Support pages.
          </p>
        </div>
        <Form>
          <Input>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />
          </Input>
          <Input>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />
          </Input>
          <Input>
            <label htmlFor="select-topic">Topic</label>
            <select type="text" id="select-topic">
              <option value="">Ordering a Tesla Powerwall or Solar Roof</option>
              <option value="">
                Becoming a Tesla Energy Products Certified Installer
              </option>
            </select>
          </Input>
          <Input>
            <label htmlFor="contact-preference">Contact Preference</label>
            <select type="text" id="contact-preference">
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
          </Input>
          <Input>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" />
          </Input>
          <Input>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" />
          </Input>
          <Input>
            <label htmlFor="password">Password</label>
            <input type="email" id="password" />
          </Input>
          <Input style={{ gridArea: "2/3/4/4" }}>
            <label htmlFor="comment">Question/Comment</label>
            <textarea name="comment" id="comment" />
          </Input>
        </Form>
        <div>
          <p>
            By clicking "Submit" I agree to be contacted at the number provided
            with more information or offers about Tesla products. I understand
            these calls or texts may use computer-assisted dialing or
            pre-recorded messages. This consent is not a condition of purchase.
          </p>
        </div>
        <div>
          <input type="submit" value="Submit" style={{ float: "right" }} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-top: 12vh;
  display: flex;
  flex-direction: column;
  margin-right: 8%;
  margin-left: 8%;
  input {
    outline: none;
    border: none;
    background-color: #3d69e1;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 10px 20px;
    border-radius: 20px;
    text-align: center;
    display: block;
    width: 150px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 200ms ease-in;
    &:hover {
      background-color: #3457b2;
    }
  }
`;
const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: repeat(4, minmax(70px, 100px));
  column-gap: 20px;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* width: 100%; */

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
  textarea,
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
    width: 100%;
    padding: 10px 20px;
    margin-bottom: 25px;
    &:active,
    &:focus {
      border: 1px solid #0004;
    }
  }
  textarea {
    resize: vertical;
    height: 150px;
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
export default Contact;
