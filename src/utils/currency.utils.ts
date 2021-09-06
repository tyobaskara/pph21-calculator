const specialCharacters = /[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;

export const formatRupiah = (value: string): string => {
  const isSpecialCharacterExist = specialCharacters.test(value);

  if (value && !isSpecialCharacterExist) {
    const formatedValue = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return `Rp. ${formatedValue}`;
  }
  
  return '';
}