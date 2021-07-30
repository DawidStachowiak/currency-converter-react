import { ErrorBox } from "./styled";

const Loading = ({ info, source}) => (
    <>
        <ErrorBox>
            <p>{info}
            </p>
            <Image src={source} />
        </ErrorBox>
    </>
);
export default Loading;