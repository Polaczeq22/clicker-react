function reducer(state, action){
		switch(action.type){
				case "logAdd":{
						return {
								log: String(state.log + action.payload + "\n")
						}
				} 
				
				case "logReset":{
						return {
								log: "//LOG START://\n"
						}
				} 

				default: return state;
		}
}

export default reducer;
