const splitNumber = (number: number) => {
    const [integerPart, fractionalPart] = number.toString().split('.')
    return [integerPart, fractionalPart]
}

export default splitNumber