import { useEffect, useState } from "react"
import { createUser, deleteUsers, getUser, getUsers } from "./api/usersApi"

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [dataForm, setDataForm] = useState<Pick<User, "name" | "email">>({ name: "", email: "" })
  const [id, setId] = useState<string>(" ")

  useEffect(() => {

    const getUsuarios = async () => {
      const data = await getUsers()
      setUsers(data.getUsers)
    }

    getUsuarios()

  }, [users])

  const handleUser = async (e: any) => {
    e.preventDefault()
    const resUser = await getUser(id)
    console.log("handleUser: ", resUser)

  }

  const handleCreate = async (e: any) => {
    e.preventDefault()
    await createUser(dataForm)
  }

  const handleDeleteAll = async (e: any) => {
    e.preventDefault()
    await deleteUsers()
  }

  return (
    <div className="relative w-screen h-screen flex flex-col gap-2 items-center justify-center bg-slate-800 font-mono">

      <form className="p-3 bg-gray-900 text-white rounded-md flex flex-col items-center gap-2 ">
        <h1 className="text-lg">Realizando testes com GraphQl</h1>

        <div className="flex flex-col items-start">
          <label htmlFor="name">Nome:</label>
          <input id="name" name="name" type="text" placeholder="Nome" className="border rounded-md text-center"
            onChange={(e) => setDataForm({ ...dataForm, [e.target.name]: e.target.value })} />
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="email">E-mail:</label>
          <input id="email" name="email" type="text" placeholder="E-mail" className="border rounded-md text-center"
            onChange={(e) => setDataForm({ ...dataForm, [e.target.name]: e.target.value })} />
        </div>

        <button type="submit" className="border p-1 rounded-sm text-xs"
          onClick={handleCreate}>Cadastrar</button>
        <button type="button" className="border p-1 rounded-sm text-xs"
          onClick={handleDeleteAll}>Deletar todos</button>

        <span className="w-10/12 h-px border"></span>

        {/* get User by Id */}

        <h1>Resgate um Usuario por Id</h1>

        <div className="flex flex-col items-start">
          <label htmlFor="id">Id:</label>
          <input id="id" name="id" type="text" placeholder="Digite aqui o ID" className="border rounded-md text-center"
            onChange={(e) => setId(e.target.value)} />
        </div>

        <button className="border rounded-sm p-1 text-xs" onClick={handleUser}>Buscar</button>

      </form>


      <ul className="border p-3 rounded-md bg-gray-900 text-white tracking-widest font-bold text-xl">
        {users.map(u => {
          return <li key={u.id} className="flex flex-row gap-2">
            {u.name}
            <button className=" text-xs border p-1">X</button>
          </li>
        })}
      </ul>

    </div>
  )
}

export default App
