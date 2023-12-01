import React from 'react'
import '../functions/operations'
import '../functions/showdata'
import { add1, add2, add3, add4, add5, add6, add7, add8, add9, ResetReult } from '../functions/showdata'
import { adding, reduce, multiply, share } from '../functions/operations'
import Swal from 'sweetalert2'

function Dashboard () {

    const info = () => {
        Swal.fire({
            title: "ATENÇÃO!",
            text: "Escolha primeiro os números e depois a operação desejada. Obs: Caso seja um número com mais de uma unidade, digite na caixinha.",
            icon: "warning",
            showCancelButton: false,
            confirmButtonColor: "#212529",
            confirmButtonText: "Ok"
        })
    }

        return (
            <div className="container-dashboard">
                <div className="container-dash">
                    <div className="btn-and-input">
                        <input placeholder="Resultado" id="res" />
                        <button onClick={ResetReult} className="clean"> LIMPAR </button>    
                    </div>
                    <div className="position-row">
                        <input type="number" id="txt1" placeholder="Número 1" />
                        <input type="number" id="txt2" placeholder="Número 2" />
                    </div>
                    <div className="okay">
                        <div className="position-num-row">
                            <input type="submit" onClick={add1} value="1" className="numeros"/>
                            <input type="submit" onClick={add2} value="2" className="numeros"/>
                            <input type="submit" onClick={add3} value="3" className="numeros"/>
                            <input type="submit" onClick={add4} value="4" className="numeros"/>
                            <input type="submit" onClick={add5} value="5" className="numeros"/>
                            <input type="submit" onClick={add6} value="6" className="numeros"/>
                            <input type="submit" onClick={add7} value="7" className="numeros"/>
                            <input type="submit" onClick={add8} value="8" className="numeros"/>
                            <input type="submit" onClick={add9} value="9" className="numeros"/>
                        </div>

                        <div className='options'>
                            <input type="submit" onClick={adding} className="op" value="+" />
                            <input type="submit" onClick={reduce} className="op" value="-" />
                            <input type="submit" onClick={multiply} className="op" value="x" />
                            <input type="submit" onClick={share} className="op" value="&#247;" />
                        </div>
                    </div>
                    <button onClick={info} className="btn-tutorial"> Como usar? </button>
                </div>
            </div>
        )
}

export default Dashboard