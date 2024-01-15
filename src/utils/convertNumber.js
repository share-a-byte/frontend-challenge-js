const convertNumber = (inputValue) => (typeof inputValue === 'string' ? parseInt(inputValue, 10) : inputValue);

export default convertNumber;
