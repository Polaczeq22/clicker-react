import React from "react";

class ClickerCounter extends React.Component{
		constructor(props){
				super(props);
		};

		componentDidMount(){
				console.log("componentDidMount");
				this.props.handleMessageRequest("ClickerCounter", "komponent zamontowano!");
		}

		componentWillMount(){
				console.log("componentWillMount");
				this.props.handleMessageRequest("ClickerCounter", "komponent zostanie zamontowany!");
		}

		componentDidUpdate(){
				console.log("componentDidUpdate");
				this.props.handleMessageRequest("ClickerCounter", "komponent został zaktualizowany!");
		}

		componentWillUpdate(){
				console.log("componentWillUpdate");
				this.props.handleMessageRequest("ClickerCounter", "komponent zostanie zaktualizowany!");
		}

		componentWillReceiveProps(){
				console.log("componentWillReceiveProps");
				this.props.handleMessageRequest("ClickerCounter", "komponent otrzyma nowe właściwości!");
		}

		shouldComponentUpdate(nextProps){
				if(this.props.count == nextProps.count){
						return false;
				} else return true;
		}

		render(){
				const count = this.props.count;

				return(
						<h2 className="clicker-counter">{count}</h2>
				);
		};
};

export default ClickerCounter;
