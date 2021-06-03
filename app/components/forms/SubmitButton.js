import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ title }) {
  const {handleSubmit, isSubmitting} = useFormikContext();

  return <Button title={title} onPress={() => {handleSubmit; console.log(isSubmitting)}} />;
}

export default SubmitButton;
