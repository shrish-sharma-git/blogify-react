const initState = {
    blogs: [
        {id: 1, title: 'Uno Lorem', contwnt: 'ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'},
        {id: 2, title: 'Dos Lorem', contwnt: 'ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'},
        {id: 3, title: 'Tres Lorem', contwnt: 'ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'}
    ]
}

const blogReducer = (state= initState, action) => {
    switch (action.type) {
        case 'CREATE_BLOG':
            console.log("Created Blog", action.blog);
            return state;
        case 'CREATE_BLOG_ERROR':
            console.log("Blog Creation Error", action.err);
            return state;
        default: 
            return state;    
    }
}

export default blogReducer