function Tabela({vetor, selecionar}){

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
                    vetor.map((parking, indice) => (
                        <tr key={indice}>
                            <td>{parking.parkingSpotNumber}</td>
                            <td>{parking.licensePlateCar}</td>
                            <td>{parking.brandCar}</td>
                            <td>{parking.modelCar}</td>
                            <td>{parking.colorCar}</td>
                            <td>{parking.registrationDate}</td>
                            <td>{parking.responsibleName}</td>
                            <td>{parking.apartment}</td>
                            <td>{parking.block}</td>
                            <td><button className='btn btn-success' onClick={() => {selecionar(indice)}} >Select</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )

}

export default Tabela;