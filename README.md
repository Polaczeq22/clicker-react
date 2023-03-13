# clicker-react

## Simple clicker page with component life cycle logging. Uses React.js and Redux.

## Functionalities:
- Counting (increasing and decreasing value by 1, 5 or 10)
- Components life cycle logging 

### Counting
By clicking the *+* button, actions below are done:
- *LMB* - increase count by 1
- *LMB + Shift* - increase count by 10
- *RMB* - decrease count by 1
- *RMB + Shift* - decrease count by 10
- *MMB* - increase count by 5
- *MMB + Shift* - decrease count by 5

The *reset* button resets the counter (LMB) or the counter and the life cycle log (LMB + Shift)

### Logging
The log displays the messages associated with components' life cycle methods. A single log line consists of a **component name** and **life cycle message**.
The whole log is contained as a single string in Redux container.

