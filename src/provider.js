import React, {useState} from "react";
import Context from "./context";

const Provider = (props) => {

    const [mission, setmission] = useState({
        mname:"Jai",
        number : "007",
        accept: "ok" 
    })
return(
    <Context.Provider
    value={{

        data:mission,
        isMissionAccepted: () => {
            setmission({...mission, accept:"not ok"})
        }

    }}
    >
        {props.children}
    </Context.Provider>
)

}

export default Provider;