import React from 'react';
import styled from 'styled-components'
import { observer, inject } from "mobx-react";

@inject("ManageFile")
@observer

class NextButton extends React.Component{
	nextClick = () => {
    this.props.ManageFile.pageIndex = this.props.ManageFile.pageIndex + 1;
  };
	
	render(){
		return(
			<Next onClick={this.nextClick}>
				<Font20>NEXT</Font20>
			</Next>
		);
	};
};

export default NextButton;

const Font20 = styled.div`
	color: white;
	font-size: 20px;
	font-weight: bold;
`

const Next = styled.button`
	color: white;
	background: #87ceea;
	width: 120px;
	height: 40px;
	box-shadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.5);
	border: none;
  border-radius: 30px;
	align-items: center;
  justify-content: space-around;
`