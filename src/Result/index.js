import "./style.css";

export const Result = ({ result }) => (

    result !== undefined && (
        <p class="formResult__paragraph">
            {`Otrzymasz:`} {result.value.toFixed(2)}{result.currency}
        </p>
    )
    );

    