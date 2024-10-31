const FormInput = ({
  id,
  labelChildren,
  inputType,
  inputAttributes = {},
  errors = [],
}) => {
  return (
    <div>
      <label htmlFor={id}>{labelChildren}:</label>
      <input type={inputType} name={id} id={id} {...inputAttributes} />
      {errors.length > 0 &&
        errors.map((error, index) => {
          return <span key={index}>* {error}</span>;
        })}
    </div>
  );
};

export default FormInput;
