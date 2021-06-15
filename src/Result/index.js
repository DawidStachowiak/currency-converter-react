import "./style.css";

export const Result = ({ result }) => (

    result !== undefined && (
        <p className="form__resultParagraph">
            {`Otrzymasz:`} {result.value}
            {result.currency}
        </p>
    )
    );

    