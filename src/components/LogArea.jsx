import React from "react";
import "../styles/log.css";
import { connect } from "react-redux";

class LogArea extends React.Component{
		constructor(props){
				super(props);
		};

		render(){
				let log = this.props.content;
				return(
						<div className="log-area">
								<h3>Dziennik</h3>
								<textarea value={log} />
						</div>
				)
		};
};

const mapStateToPros = (state) => ({ content: state.log })

export default connect(mapStateToPros)(LogArea);
