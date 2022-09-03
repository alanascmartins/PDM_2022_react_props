import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'


const App = () => {
    return (
        <div className="container border mt-2">
            <div className="row border-bottom m-2">
                <h1 className="display-5 text-center">Seus Pedidos</h1>
            </div>
            <div className="row">
                <div className="col-sm-8 col-md-6">
                    {/*Cartão dp Bootstrap*/}
                    <div className="card my-2">{/* my-2 descolou o card da borda*/}
                        <div className="card-header text-muted">22/04/2021</div>
                        {/*Corpo do Cartão*/}
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                            <i className="fas fa-hdd fa-2x"></i>
                            </div>
                            {/* flex-grow 1: tomar espaço remanescente */}
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">SSD</h4>
                                <p className="text-center">SSD Kingston A400 - SATA</p>
                            </div> 
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
} 

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
