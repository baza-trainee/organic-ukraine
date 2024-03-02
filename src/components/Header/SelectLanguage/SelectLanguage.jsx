import { useState } from 'react';
import Select from 'react-select';

const option = [
  { value: 'uk', label: 'UA' },
  { value: 'en', label: 'EN' },
  { value: 'pl', label: 'PL' },
];

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
        defaultValue={selectedOption}
        onChange={handelChange}
        options={option}
      />
    </>
  );
};
