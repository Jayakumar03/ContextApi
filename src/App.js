import React, {Fragment} from "react";

import Provider from "./provider";

import Context from "./context";


const Agents = () => {
    return(
        <Context.Consumer>
            { context => (
                <Fragment>
                    <h3> Agent Infromation</h3>
                    <p>Mission Name: {context.data.mname}</p>
                    <p>Mission challenge: {context.data.accept}</p>
                    <button onClick={context.isMissionAccepted}>press the button to change</button>
                </Fragment>
            ) }
        </Context.Consumer>
    )
}


const App = () => {
return(
    <div>
    <h1>Context api</h1>
    <Provider>
        <Agents />
    </Provider>
    </div>
)

}

export default App;