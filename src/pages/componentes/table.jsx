function table(){
    return (
        <>
        <div className="w-full p-14 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
            <p className="text-5xl text-cyan-500">Historicos de Registro</p>
            <p className="text-white">Aqui você irá visualizar as suas últimas solicitações registradas no sistema</p>
        </div>
        <div>
        <table className="bg-teal-500 w-full rounded-t-md  ">
            <thead className="text-white">
                <tr>
                    <th>MATRICULA</th>
                    <th>NOME</th>
                    <th>SETOR</th>
                    <th>CARGO</th>
                    <th>STATUS</th>
                </tr>

            </thead>
        </table>
        </div>
        </div>
        </>
    )
}

export default table