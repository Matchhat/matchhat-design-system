import { withFormik } from "./withFormik";

interface FormWrapperValues {
  [key: string]: unknown;
}

const FormWrapperContainer: React.FC<{ values: FormWrapperValues }> = () => (
  <>
  </>
);

export const FormWrapper = withFormik(FormWrapperContainer);
