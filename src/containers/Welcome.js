import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as stuffActions from '../actions/stuffActions'
import FlatList from 'flatlist-react'
import styled from 'styled-components'
import Card from '../components/Card'


const profileImage = "https://icons-for-free.com/iconfiles/png/512/badge+business+circle+human+id+male+man+people+person+profile-1320184105268408486.png"

function DropDownMenu() {
  return (
    <Select>
      <option>All campaigns</option>
      <option>First</option>
      <option>Second</option>
    </Select>
  )
}

function NavBarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30">
      <g>
        <path d="M 13 0 L 26 7.5 L 26 15 L 26 22.5 L 13 30 L 0 22.5 L 0 15 L 0 7.5 Z" fill="hsla(258, 100%, 50%, 0.3)"></path>
        <path d="M 0 7.5 L 13 15 L 26 7.5 L 26 22.5 L 13 30 L 0 22.5 Z" fill="rgba(77, 0, 255, 0.6)"></path>
        <path d="M 13 15 L 26 22.5 L 13 30 L 0 22.5 Z" fill="#4D00FF"></path>
      </g>
    </svg>
  )
}

@connect(
  state => ({
    stuff: state.stuff
  }),
  dispatch => (
    bindActionCreators(stuffActions, dispatch)
  )
)


class Welcome extends Component {

  componentDidMount() {
    if (this.props.stuff.length === 0) {
      this.props.fetchStuff()
    }
  }

  renderStuff = campaign => <Card {...{campaign}}/>

  render() {
    return (
      <>
        <NavBar>
          <NavBarIcon/>
          <NavText>Dashboard</NavText>
          <NavText selected>Marketplace</NavText>
          <NavText>Campaigns</NavText>
          <NavText>Messenger</NavText>
          <ProfileImg src={profileImage} width="40" height="40"/>
        </NavBar>
        <HeaderWrapper>
          <Header>Marketplace</Header>
          <DropDownMenu />
        </HeaderWrapper>
        <FlatListContainer>
          <FlatList list={this.props.stuff} renderItem={this.renderStuff}/>
        </FlatListContainer>
      </>
    )
  }
}

export default Welcome

const Select = styled.select`
  height: 30px;
  width: 130px;
  -webkit-appearance: none;
  border-radius: 0;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC') !important;
  background-color: white
  background-repeat: no-repeat;
  background-position: 100px center;
  padding-left: 10px;
`

const HeaderWrapper = styled.div`
  display: flex
  align-items: center
  justify-content: space-between
  padding-left: 50px
  padding-right: 80px
  height: 100px
`

const Header = styled.p`
  width: 158px;
  height: 28px;
  font-family: ".SFNSDisplay-Bold", "SFProDisplay-Bold", "SFUIDisplay-Bold", ".SFUIDisplay-Bold", sans-serif;
  color: #000000;
  font-size: 28px;
  letter-spacing: -0.2px
`

const ProfileImg = styled.img`
  border-radius: 50px
  position: relative
  left: 650px
`

const NavText = styled.p`
  font-family: ".SFNSText", "SFProText-Regular", "SFUIText-Regular", ".SFUIText", sans-serif;
  font-size: 14px;
  padding-left: 30px
  color: ${props => props.selected ? "#4D00FF" : "black"}
`

const NavBar = styled.div`
  display: flex
  align-items: center
  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
  padding-left: 55px
`
const FlatListContainer = styled.ul``
