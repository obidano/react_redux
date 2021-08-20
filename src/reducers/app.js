const $state = {
    users: [{id: 0, name: 'Steve'}],
    is_ocnnected:false,
    user_info:null
}

const app = (state = $state, action) => {
    switch (action.type) {
        default:
            return state
    }
}


export default app