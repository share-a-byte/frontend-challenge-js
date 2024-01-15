
const convertNumber = (inputValue)=>{
    return typeof inputValue === 'string' ? parseInt(inputValue) : inputValue
}

export default convertNumber