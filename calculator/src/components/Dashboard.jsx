import React from 'react'
import '../functions/operations'
import '../functions/operationSet'
function Dashboard (pros) {

        return (
            <div className="container">
                <h3> Digite os valores </h3>
                <div className="position-row">
                    <input type="number" id="txt1" placeholder="VALOR 1" />
                    <input type="number" id="txt2" placeholder="VALOR 2" />
                </div>
                <div className="position-num-row">
                    <input type="submit" onClick={pros.add1} value="1" className="numeros num1"/>
                    <input type="submit" onClick={pros.add2} value="2" className="numeros num2"/>
                    <input type="submit" onClick={pros.add3} value="3" className="numeros num3"/>
                    <input type="submit" onClick={pros.add4} value="4" className="numeros num4"/>
                    <input type="submit" onClick={pros.add5} value="5" className="numeros num5"/>
                    <input type="submit" onClick={pros.add6} value="6" className="numeros num6"/>
                    <input type="submit" onClick={pros.add7} value="7" className="numeros num7"/>
                    <input type="submit" onClick={pros.add8} value="8" className="numeros num8"/>
                    <input type="submit" onClick={pros.add9} value="9" className="numeros num9"/>
                </div>
                <div className="position-row">
                    <input type="submit" onClick={pros.somar} value="+" />
                    <input type="submit" onClick={pros.subtrair} value="-" />
                    <input type="submit" onClick={pros.mutplicar} value="x" />
                    <input type="submit" onClick={pros.dividir} value="&#247;" />
                </div>
                <a href="index.html"><input type="reset" value="Limpar" /></a>
                <div id="res">Resultado</div>
            </div>
        )
}

export default Dashboard