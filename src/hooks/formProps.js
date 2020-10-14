import React, { createContext, useContext, useState } from 'react';

const FormPropsContext = createContext({});

function FormPropsProvider({ children }) {
  const [formProps, setFormProps] = useState({
    form: false,
    step: 1,

    planBronze: false,
    planSilver: true,
    planGold: false,
    planDiamond: false,

    planId: '9868bea1-71eb-403d-bda3-192a67cd91ee',
  });

  return (
    <FormPropsContext.Provider value={{ formProps, setFormProps }}>
      {children}
    </FormPropsContext.Provider>
  );
}

function useFormProps() {
  return useContext(FormPropsContext);
}

export { FormPropsProvider, useFormProps };
