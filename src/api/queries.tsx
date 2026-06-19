const queryGetUsers = `
    query {
        getUsers {
            id
            name
            email
        }
    }
`

const queryGetUser = `
    query getUser ($id: String!) {
        getUser(id:$id) {
            name
            email
        }
    }
`

const mutationCreateUser = `
    mutation createUser ($name: String!, $email: String!) {
        createUser(input: {name:$name, email:$email}) {
            name
            email
        }
    }
`


export { queryGetUsers, queryGetUser, mutationCreateUser }