const initState = {
    blogs: [
        {id: 1, title: 'lorem', contwnt: 'ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'},
        {id: 2, title: 'lorem', contwnt: 'ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'},
        {id: 3, title: 'lorem', contwnt: 'ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'}
    ]
}

const blogReducer = (state= initState, action) => {
    return state;
}

export default blogReducer