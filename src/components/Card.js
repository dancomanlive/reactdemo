/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import FacebookImg from './FbImg'
import InstagramImg from './InstaImg'
import SvgDots from './Svg'

export default class Card extends PureComponent {
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