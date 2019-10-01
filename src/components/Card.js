/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import styled from 'styled-components'

function InstagramImg() {
  return (
    <img
      src="https://anniegriggs-photography.co.uk/wp-content/uploads/2018/08/Instagram-logo.jpg"
      alt=''
      width="20" height="20"
    />
  )
}

function FacebookImg() {
  return (
    <img 
      src="https://logodix.com/logo/938964.png"
      alt=''
      width="18" height="18"
    />
  )
}

function SvgDots() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
      <g transform="translate(-1 -1)"></g>
      <path d="M 2.5 0 C 3.881 0 5 1.119 5 2.5 C 5 3.881 3.881 5 2.5 5 C 1.119 5 0 3.881 0 2.5 C 0 1.119 1.119 0 2.5 0 Z" fill="#4D00FF"></path>
      <path d="M 2.5 7 C 3.881 7 5 8.119 5 9.5 C 5 10.881 3.881 12 2.5 12 C 1.119 12 0 10.881 0 9.5 C 0 8.119 1.119 7 2.5 7 Z" fill="#4D00FF"></path>
      <path d="M 9.5 0 C 10.881 0 12 1.119 12 2.5 C 12 3.881 10.881 5 9.5 5 C 8.119 5 7 3.881 7 2.5 C 7 1.119 8.119 0 9.5 0 Z" fill="#4D00FF"></path>
      <path d="M 9.5 7 C 10.881 7 12 8.119 12 9.5 C 12 10.881 10.881 12 9.5 12 C 8.119 12 7 10.881 7 9.5 C 7 8.119 8.119 7 9.5 7 Z" fill="#4D00FF"></path>
    </svg>
  )
}

export default class Card extends Component {
  render() {
    return (
      <Container>
        <HeaderImage src={this.props.campaign.brand.image} width="367" height="240"/>
        <TextContainer>
          <TextOne>{this.props.campaign.brand.name}</TextOne>
          <TextTwo>{this.props.campaign.countries[0].name}</TextTwo>
        </TextContainer>
        <RoundIcon src={this.props.campaign.image} width="40" height="40"/>
        <Divider/>
        <Wrapper>
          <SvgDots />
          <InstagramImg />
          <SocialText>20k Followers</SocialText>
          <FacebookImg />
          <SocialText>20k Likes</SocialText>
        </Wrapper>
      </Container>
    )
  }
}


const SocialText = styled.span`
  font-family: ".SFNSText", "SFProText-Regular", "SFUIText-Regular", ".SFUIText", sans-serif;
  color: #1f1f1f;
  font-size: 12px;
  letter-spacing: 0px;
  line-height: 1;
`

const Wrapper = styled.div`
  display: flex
  align-items: center
  justify-content: space-between
  padding-left: 20px
  padding-right: 100px
  height: 50px
`

const Divider = styled.div`
  width: 367px;
  height: 1px;
  overflow: visible;
  background-color: rgba(0, 0, 0, 0.05);
  margin-top: -30px;
`

const RoundIcon = styled.img`
  border-radius: 50px
  position: relative
  bottom: 40px; left: 300px
`

const TextContainer = styled.div`
  width: 367px;
`

const TextOne = styled.span`
  font-family: ".SFNSText-Bold", "SFProText-Bold", "SFUIText-Bold", ".SFUIText-Bold", sans-serif;
  color: #000000;
  font-size: 16px;
  padding-left: 30px;
  padding-top: 20px
  display: block
`

const TextTwo = styled.span`
  font-family: ".SFNSText", "SFProText-Regular", "SFUIText-Regular", ".SFUIText", sans-serif;
  color: #999;
  font-size: 12px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: left;
  display: block
  padding-left: 30px;
  padding-top: 10px
`

const HeaderImage = styled.img`
  overflow: visible;
  border-radius: 16px 16px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const Container = styled.div`
  width: 367px;
  height: 371px;
  overflow: visible;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px hsla(0, 0%, 0%, 0.08);
  margin: 10px
  float: left
`