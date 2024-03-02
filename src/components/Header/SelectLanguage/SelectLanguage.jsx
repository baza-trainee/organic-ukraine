import { useState } from 'react';
import Select from 'react-select';

const option = [
  { value: 'uk', label: 'UA' },
  { value: 'en', label: 'EN' },
  { value: 'pl', label: 'PL' },
];

export const SelectLanguage = () => {
  const [selectedOption, setSelectedOption] = useState('en');

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={option}
      />
    </>
  );
};
