import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { Colors, Fonts } from "./styles"

export const Title = styled.h1`
  color: ${props =>
    props.white
      ? "#fff"
      : css`
          ${Colors.green}
        `};
  font-size: 36px;
  font-family: ${Fonts.goldenBook};
  line-height: 1.67;
  text-align: ${props => props.textAlign};
  margin: ${props => props.margin || ".5em 0"};
  ${props =>
    props.splash &&
    css`
      font-size: 48px;
      @media (max-width: 720px) {
        display: none;
      }
    `}
`
export const SEOTitle = styled.h2`
  color: ${props =>
    props.white
      ? "#fff"
      : css`
          ${Colors.green}
        `};
  font-size: 36px;
  font-family: ${Fonts.goldenBook};
  line-height: 1.67;
  text-align: ${props => props.textAlign};
  margin: ${props => props.margin || ".5em 0"};
  ${props =>
    props.splash &&
    css`
      font-size: 48px;
      @media (max-width: 720px) {
        display: none;
      }
    `}
`

export const Subtitle = styled.h2`
  color: ${props =>
    props.white
      ? "#fff"
      : css`
          ${Colors.green}
        `};
  font-size: ${props => (props.small ? "22px" : "26px")};
  font-family: ${Fonts.sofiaBold};
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 6px;
  text-align: ${props => props.textAlign};
  @media (max-width: 920px) {
    font-size: 22px;
  }
`

export const Text = styled.p`
  color: ${props =>
    props.white
      ? "#fff"
      : props.green
      ? css`
          ${Colors.green}
        `
      : css`
          ${Colors.grey}
        `};
  font-size: ${props => (props.small ? "18px" : "22px")};
  font-family: ${Fonts.sofiaLight};
  font-size: 18px;
  width: ${props => props.width};
  margin: ${props => props.margin};
  text-align: ${props => props.textAlign};
  line-height: 1.67;
  @media (max-width: 920px) {
    font-size: 16px;
  }
  @media (max-width: 720px) {
    font-size: 14px;
  }
  margin: ${props => props.margin || "0"};
  ${props =>
    props.blogsubtitle &&
    css`
      font-size: 14px;
      font-weight: bold;
      letter-spacing: normal;
      text-align: center;
      color: ${Colors.fawn};
      text-transform: uppercase;
      margin: 22px 0 2px 0;
      font-family: ${Fonts.goldenBook};
    `}
  ${props =>
    props.blogtitle &&
    css`
      font-weight: bold;
      line-height: 1.44;
      letter-spacing: normal;
      text-align: center;
      color: #000;
      font-family: ${Fonts.sofiaBold};
    `}
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 115px;
  border-radius: 2px;
  font-family: ${Fonts.montserrat};
  border: ${props => (props.error ? "solid 1px red" : "solid 1px #c4c9d0")};
  background-color: #ffffff;
  outline: none;
  padding: 10px 16px;
  margin-top: 12px;
  transition: 250ms;
  &:focus {
    border: solid 1px ${Colors.darkBlue};
  }
`

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  font-family: ${Fonts.montserrat};
  line-height: 1;
  color: black;
  margin-bottom: 20px;
  text-align: left;
`

export const Nav = styled(Link)`
  color: ${props =>
    props.active
      ? css`
          ${Colors.green}
        `
      : props.black
      ? "#000"
      : "#fff"};
  font-size: 16px;
  margin-right: ${props => (props.right ? "0" : "2.25em")};
  font-family: ${Fonts.sofiaBold};
  text-decoration: none;
  padding: 0.25em 0;
  border-bottom: 3px solid transparent;
  ${props =>
    props.home &&
    css`
      color: ${Colors.green};
    `};
  @media (max-width: 769px) {
    font-size: 12px;
    padding: ${props => (props.right ? "0" : ".25em")};
    margin-right: ${props => (props.right ? "0" : "1em")};
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`

export const IDXNav = styled.a`
  color: ${props =>
    props.active
      ? css`
          ${Colors.green}
        `
      : props.black
      ? "#000"
      : "#fff"};
  font-size: 16px;
  margin-right: ${props => (props.right ? "0" : "2.25em")};
  font-family: ${Fonts.sofiaBold};
  text-decoration: none;
  padding: 0.25em 0;
  border-bottom: 3px solid transparent;
  ${props =>
    props.home &&
    css`
      color: ${Colors.green};
    `};
  @media (max-width: 769px) {
    font-size: 12px;
    padding: ${props => (props.right ? "0" : ".25em")};
    margin-right: ${props => (props.right ? "0" : "1em")};
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`

export const Button = styled.button`
  width: ${props => props.width || "225px"};
  height: 52px;
  background: ${props => props.background || `${Colors.fawn}`};
  font-family: ${Fonts.sofiaBold};
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #ffffff;
  box-sizing: border-box;
  text-transform: uppercase;
  margin: ${props => props.margin};
  cursor: pointer;
  transition: 250ms;
  &:hover {
    background: #cc9e60;
  }
`

export const Input = styled.input`
  height: 34px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  border: ${props => (props.error ? "1px solid red" : "1px solid #c4c9d0")};
  background-color: #ffffff;
  outline: none;
  padding: 0;
  padding-left: 8px;
  transition: 250ms;
  margin-bottom: 20px;
  color: #393939;
  &:focus {
    border: solid 1px #8a919c;
  }
`

export const Select = styled.select`
  height: 34px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  border: ${props => (props.error ? "1px solid red" : "1px solid #c4c9d0")};
  background-color: #ffffff;
  outline: none;
  margin: ${props => props.margin};
  padding: 0;
  padding-left: 8px;
  transition: 250ms;
  margin-bottom: 20px;
  color: #393939;
  &:focus {
    border: solid 1px #8a919c;
  }
`

// Containers

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: ${props => props.width};
  justify-content: ${props => props.justifycontent};
  align-items: ${props => props.alignitems};
  margin: ${props => props.margin};
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  justify-content: ${props => props.justifycontent};
  align-items: ${props => props.alignitems};
  margin: ${props => props.margin};
  align-content: ${props => props.aligncontent};
`
export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1400px;
`
