import { useState } from 'react';
import Select from 'react-select';

const option = [
  { value: 'uk', label: 'UA' },
  { value: 'en', label: 'EN' },
  { value: 'pl', label: 'PL' },
];

const customStyleSelect = {
  control: provided => ({
    ...provided,
    backgroundColor: 'var(--secondary-brown-200)',
    borderRadius: '50%',
    border: 'none',
    width: '56px',
    height: '56px',
    fontFamily: 'var(--font-family)',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '100%',
    textAlign: 'center',
    color: 'var(--secondary-brown-950)',
    borderright: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    display: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    '::before': {
      display: 'none',
    },
    '::after': {
      display: 'none',
    },
  }),
};

export const SelectLanguage = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: 'uk',
    label: 'UA',
  });

  const handelChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <Select
        styles={customStyleSelect}
        defaultValue={selectedOption}
        onChange={handelChange}
        options={option}
      />
    </>
  );
};
