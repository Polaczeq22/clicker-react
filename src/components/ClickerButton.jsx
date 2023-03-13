import React from "react";

class ClickerButton extends React.Component{
		constructor(props){
				super(props);
		}

		componentDidMount(){
				this.props.handleMessageRequest("ClickerButton", "komponent zamontowano!");
		}

		componentWillMount(){
				this.props.handleMessageRequest("ClickerButton", "komponent zostanie zamontowany!");
		}

		componentDidUpdate(){
				this.props.handleMessageRequest("ClickerButton", "komponent został zaktualizowany!");
		}

		componentWillUpdate(){
				this.props.handleMessageRequest("ClickerButton", "komponent zostanie zaktualizowany!");
		}

		componentWillReceiveProps(){
				this.props.handleMessageRequest("ClickerButton", "komponent otrzyma nowe właściwości!");
		}

		render(){
				return(
						<button
								className="clicker-button"
								onMouseDown={(e) => this.props.handleMouseClick(e)}
						>
						{this.props.tag}
						</button>
				)
		}
};

export default ClickerButton;
