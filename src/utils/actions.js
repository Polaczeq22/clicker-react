import uniqid from "uniqid"; 

export const addLog = (title, content) => ({
				type: "logAdd",
				id: uniqid(),
				payload: title + ": " + content + "\n"
});

export const resetLog = () => ({
		type: "logReset",
		id: uniqid(),
});
