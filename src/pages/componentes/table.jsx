function table(){
    return (
        <>
        <div className="w-full p-14 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <p className="text-5xl text-cyan-500">Historicos de Registro</p>
                <p className="text-white">Aqui você irá visualizar as suas últimas solicitações registradas no sistema</p>
            </div>

        <div className="overflow-auto md:h-24 rounded-t-md w-[400px]">
        <table className=" md:w-full rounded-t-md  text-center text-white w-auto text-xs ">
            <thead className="text-white bg-teal-500 rounded-t-md h-16 sticky top-0">
                <tr>
                    <th>MATRICULA</th>
                    <th>NOME</th>
                    <th>SETOR</th>
                    <th>CARGO</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td >12345</td>
                <td >João Silva</td>
                <td >Financeiro</td>
                <td >Analista</td>
                <td >Ativo</td>
                </tr>
                <tr>
                <td >67890</td>
                <td >Maria Souza</td>
                <td >RH</td>
                <td >Coordenadora</td>
                <td >Ativo</td>
                </tr>
                <tr>
                <td >67890</td>
                <td >Maria Souza</td>
                <td >RH</td>
                <td >Coordenadora</td>
                <td >Ativo</td>
                </tr>
                <tr>
                <td >67890</td>
                <td >Maria Souza</td>
                <td >RH</td>
                <td >Coordenadora</td>
                <td >Ativo</td>
                </tr>
                <tr>
                <td >67890</td>
                <td >Maria Souza</td>
                <td >RH</td>
                <td >Coordenadora</td>
                <td >Ativo</td>
                </tr>
                <tr>
                <td >67890</td>
                <td >Maria Souza</td>
                <td >RH</td>
                <td >Coordenadora</td>
                <td >Ativo</td>
                </tr>
            
            </tbody>
        </table>
        </div>
        </div>
        </>
    )
}

export default table