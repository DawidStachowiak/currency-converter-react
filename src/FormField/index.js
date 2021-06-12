const FormField = ({ label, body }) => (
  <label className={"form__label"}>
    <span className="form__labelText">{label}</span>
    {body}
  </label>
);

export default FormField;
