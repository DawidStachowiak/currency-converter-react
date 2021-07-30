import { LoaderBox, Image } from "./styled";

const Loading = ({ info, source}) => (
    <>
        <LoaderBox>
            <p>{info}
            </p>
            <Image src={source} />
        </LoaderBox>
    </>
);
export default Loading;