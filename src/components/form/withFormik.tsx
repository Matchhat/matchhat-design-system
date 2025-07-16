import * as React from "react";
import { Formik, Form } from "formik";
import type { FormikHelpers, FormikConfig } from "formik";

interface WithFormikProps<T> {
  initialValues: T;
  onSubmit: (values: T, actions: FormikHelpers<T>) => void; 
  validationSchema?: FormikConfig<T>["validationSchema"];
  children?: React.ReactNode;
}

export const withFormik = <T extends object>(
  WrappedComponent: React.FC<{ values: T; isSubmitting: boolean }>
) => {
  return ({
    initialValues,
    onSubmit,
    validationSchema,
    children,
  }: WithFormikProps<T>) => {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnMount={true}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <WrappedComponent values={values} isSubmitting={isSubmitting} />
            {children} {/* ✅ Pass children inside the Formik wrapper */}
          </Form>
        )}
      </Formik>
    );
  };
};
