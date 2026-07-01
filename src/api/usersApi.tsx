import { mutationCreateUser, mutationDeleteUsers, queryGetUser, queryGetUsers } from "./queries"

export const getUsers = async () => {
    try {
        const res = await fetch("http://localhost:9000/graphql", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: queryGetUsers })
        })

        if (res) {
            const { data } = await res.json()

            return data
        }
    } catch (err) {
        console.log("getUsersErr: ", err)
    }
}

export const getUser = async (id: string) => {
    try {
        const res = await fetch("http://localhost:9000/graphql", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: queryGetUser, variables: { id: id } })
        })

        if (res) {
            const { data } = await res.json()

            return data
        }
    } catch (err) {
        console.log("getUserErr: ", err)
    }
}

export const createUser = async ({ name, email }: Pick<User, "name" | "email">) => {
    try {
        const res = await fetch("http://localhost:9000/graphql", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: mutationCreateUser, variables: { name, email } })
        })

        if (res) {
            const { data } = await res.json()
            return data
        }
    } catch (err) {
        console.log("getUserErr: ", err)
    }
}

export const deleteUsers = async () => {
    try {
        const res = await fetch("http://localhost:9000/graphql", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: mutationDeleteUsers })
        })

        const { data } = await res.json()

        return data
    } catch (err) {
        console.log(err)
    }
}