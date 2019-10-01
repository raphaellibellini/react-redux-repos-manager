const If = ({ condition, children }) => {
    return condition ? (children ? children : '') : '';
}

export default If;