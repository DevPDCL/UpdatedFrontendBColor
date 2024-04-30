import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1> Ohh No! </h1>
            <h3> {err.status}: {err.statusTest} </h3>
        </div>
    );
};


export default Error;