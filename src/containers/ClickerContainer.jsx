import React from "react";
import "../styles/clicker.css";
import ClickerButton from "../components/ClickerButton";
import ClickerCounter from "../components/ClickerCounter";
import { connect } from "react-redux";
import {addLog, resetLog} from "../utils/actions.js";

class ClickerContainer extends React.Component{
		constructor(props){
				super(props);

				this.state = {
						count: localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0
				};

				this.changeCount = this.changeCount.bind(this);
				this.resetContent = this.resetContent.bind(this);
				this.handleAddLog = this.handleAddLog.bind(this);
		};

		changeCount(e){
				switch(e.button){
						case 0:{
								if(e.shiftKey){
										this.setState((prevState) => ({
												count: prevState.count + 10
										}));
								}
								else{
										this.setState((prevState) => ({
												count: prevState.count + 1
										}));
								}
						}break;
						case 1:{
								if(e.shiftKey){
										this.setState((prevState) => ({
												count: prevState.count - 5
										}));
								}
								else{
										this.setState((prevState) => ({
												count: prevState.count + 5
										}));
								}
						}break;
						case 2:{
								if(e.shiftKey){
										this.setState((prevState) => ({
												count: prevState.count - 10
										}));
								}
								else{
										this.setState((prevState) => ({
												count: prevState.count - 1
										}));
								}
						}break;
				}
		};

		resetContent(e){
				this.setState((prevState) => ({
						count: 0
				}));

				if(e.shiftKey){
						this.props.resetLog();
						this.props.addLog("LOG", "wyczyszczono dziennik!");
				}
		};

		handleAddLog(title, content){
				this.props.addLog(title, content);
		}

		componentDidUpdate(){
				localStorage.setItem("count", this.state.count);
				console.log("componentDidUpdate");
				this.props.addLog("ClickerContainer", "komponent został zaktualizowany!");
		}

		componentDidMount(){
				console.log("componentDidMount");
				this.props.addLog("ClickerContainer", "komponent zamontowano!");
		}

		componentWillMount(){
				console.log("componentWillMount");
				this.props.addLog("ClickerContainer", "komponent zostanie zamontowany!");
		}

		componentWillUpdate(){
				console.log("componentWillUpdate");
				this.props.addLog("ClickerContainer", "komponent zostanie zaktualizowany!");
		}

		componentWillReceiveProps(){
				console.log("componentWillReceiveProps");
				this.props.addLog("ClickerContainer", "komponent otrzyma nowe właściwości!");
		}

		shouldComponentUpdate(undefined, nextState){
				if(this.state.count == nextState.count){
						return false;
				} else return true;
		}

		render(){
				return(
				<div className="clicker">
						<ClickerCounter 
								count={this.state.count}
								handleMessageRequest={this.handleAddLog}
						/>
						<div className="buttons">
								<ClickerButton 
										tag="+" 
										handleMouseClick={this.changeCount} 
										current-count={this.state.count}
										handleMessageRequest={this.handleAddLog}
								/>
								<ClickerButton 
										tag="reset" 
										handleMouseClick={this.resetContent} 
										current-count={this.state.count}
										handleMessageRequest={this.handleAddLog}
								/>
								<ClickerButton 
										tag="info" 
										handleMouseClick={() => this.props.handleInfoRequest()} 
										current-count={this.state.count}
										handleMessageRequest={this.handleAddLog}
								/>
						</div>
				</div>
				);
		};
};

export default connect(null, { addLog, resetLog })(ClickerContainer);
