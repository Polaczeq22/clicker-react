import React from "react";
import ClickerContainer from "../containers/ClickerContainer";
import LogArea from "../components/LogArea";
import "../styles/main.css";
import { connect } from "react-redux";
import { addLog } from "../utils/actions";

class MainPage extends React.Component{
		constructor(props){
				super(props);
				this.showInfo = this.showInfo.bind(this);
		};

		showInfo(){
				this.props.addLog("INFO","Autor: Michał Mikuła");
				this.props.addLog("INFO","Zasada działania:");
				this.props.addLog("INFO","Przycisk '+':"); 
				this.props.addLog("INFO","- wcisnięcie LPM: zwiększenie licznika o 1, "); 
				this.props.addLog("INFO","- wciśnięcie LPM + Shift: zwiększenie licznika o 10, ");
				this.props.addLog("INFO","- wciśnięcie PPM: zmniejszenie licznika o 1, ");
				this.props.addLog("INFO","- wciśnięcie PPM + Shift: zmniejszenie licznika o 10, "); 
				this.props.addLog("INFO","- wciśnięcie ŚPM: zwiększenie licznika o 5, ");
				this.props.addLog("INFO","- wciśnięcie ŚPM + Shift: zmniejszenie licznika o 5 "); 
				this.props.addLog("INFO","Przycisk 'reset':"); 
				this.props.addLog("INFO","- wciśnięcie LPM: reset licznika, ");
				this.props.addLog("INFO","- wciśnięcie LPM + Shift: reset licznika i dziennika"); 
		};

		render(){
				return(
						<div className="main-page">
								<header>
										<h1>Clicker - Extended</h1>
								</header>
								<main>
										<ClickerContainer 
												handleInfoRequest={this.showInfo}
												handleLogResetRequest={this.logReset}
												handleMessageRequest={this.showMessage}
										/>
										<LogArea />
								</main>
						</div>
				);
		};
};

export default connect(null, {addLog})(MainPage);
