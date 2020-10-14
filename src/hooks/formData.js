import React, { createContext, useContext, useState } from 'react';

const FormDataContext = createContext({});

function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({
    personType: 'private',
    documents: '',
    name: '',
    birthDate: '',
    siteName: '',
    tradingName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',

    partners: [],
    partnerName: '',
    partnerCPF: '',
    partnerBirthDate: '',

    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    state: '',
    city: '',
    cityIbge: '',

    accountType: '',
    bank: '',
    agency: '',
    agencyDigit: '',
    account: '',
    accountDigit: '',

    cardName: '',
    cardNumber: '',
    expirationDate: '',
    codeSecurity: '',
    flag: '',
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

function useFormData() {
  return useContext(FormDataContext);
}

export { FormDataProvider, useFormData };
