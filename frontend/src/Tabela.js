function Tabela({vetor}){

    console.log(vetor);

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Parking Spot Number</th>
                    <th>License Plate Car</th>
                    <th>Brand Car</th>
                    <th>Model Car</th>
                    <th>Color Car</th>
                    <th>Registration Date Car</th>
                    <th>Responsible Name</th>
                    <th>Apartment</th>
                    <th>Block</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(vetor).map((obj, indice) => (
                        <tr>
                            <td>{indice+1}</td>
                            <td>{obj}</td>
                            <td>{obj}</td>
                            <td>{obj}</td>
                            <td>{obj.modelCar}</td>
                            <td>{obj.colorCar}</td>
                            <td>{obj.registrationDate}</td>
                            <td>{obj.responsibleName}</td>
                            <td>{obj.apartment}</td>
                            <td>{obj.block}</td>
                            <td><button className='btn btn-success'>Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )

}

export default Tabela;