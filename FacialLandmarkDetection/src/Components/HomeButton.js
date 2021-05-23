import React from 'react';
import styled from 'styled-components'
import { observer, inject } from "mobx-react";

@inject("ManageFile")
@observer

class HomeButton extends React.Component{
	homeClick = () => {
    this.props.ManageFile.imageUrl = "";
		this.props.ManageFile.pageIndex = 0;
		this.props.ManageFile.fileName = "";
		this.props.ManageFile.faceType = "";
		this.props.ManageFile.isFront = undefined;
		this.props.ManageFile.genderButtonIndex = 0;
		this.props.ManageFile.isCapture = false;
  };
	
	render(){
		return(
			<Home onClick={this.homeClick}>
				<Font20>HOME</Font20>
			</Home>
		);
	};
};

export default HomeButton;

const Font20 = styled.div`
	color: white;
	font-size: 20px;
	font-weight: bold;
`

const Home = styled.button`
	&:hover {
    cursor: pointer;
    border: solid 2px #0933b3;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3);
  }
	color: white;
	background-color: #87ceea;
	width: 120px;
	height: 40px;
	box-shadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.5);
	border: none;
  border-radius: 30px;
	align-items: center;
  justify-content: space-around;
`