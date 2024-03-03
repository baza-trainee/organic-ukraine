import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

const options = [
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
    cursor: 'pointer',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'var(--secondary-brown-200)',
    // Style your menu here
  }),
  valueContainer: provided => ({
    ...provided,
    justifyContent: 'center',
    // Any additional styles for value container
  }),
};

export const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(
    options.find(option => option.value === i18n.language) || options[0]
  );

  const handelChange = selectedOption => {
    setSelectedOption(selectedOption);
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <>
      <Select
        isSearchable={false}
        styles={customStyleSelect}
        defaultValue={selectedOption}
        onChange={handelChange}
        options={options}
      />
    </>
  );
};
