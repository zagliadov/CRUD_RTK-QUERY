import { FC } from 'react';


interface IErrorMessage {
    status: string;
}

const ErrorMessage: FC<IErrorMessage> = ({status}) => {
    return (

        <div>
            <p>{status}</p>
        </div>
    );
};

export default ErrorMessage;