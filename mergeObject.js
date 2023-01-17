const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button = {    //merge buttonInfo, buttonStyle
    ...buttonInfo,
    ...buttonStyle
}

console.table(button)