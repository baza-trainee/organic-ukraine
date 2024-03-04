import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { customStyleSelect } from './SelectLanguage';

const options = [
  { value: 'uk', label: 'UA' },
  { value: 'en', label: 'EN' },
  { value: 'pl', label: 'PL' },
];

export const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(
    options.find(option => option.value === i18n.language) || options[0]
  );

  const filteredOptions = options.filter(
    option => option.value !== i18n.language
  );

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    i18n.changeLanguage(selectedOption.value);
  };
  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLanguageOption = options.find(
        option => option.value === i18n.language
      );
      setSelectedOption(currentLanguageOption);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);
  return (
    <>
      <Select
        isSearchable={false}
        styles={customStyleSelect}
        value={selectedOption}
        onChange={handleChange}
        options={filteredOptions}
      />
    </>
  );
};
