import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            subOption: 'G1',
            gradeOption: 'G2',
            grade: '',
            subGrade: null,
        }
    }

    onSubOptionChanged(event) {
        const option = event.target.value
        this.setState({
            subOption: option,
            gradeOption: option === 'G1' ? 'G2' : 'G1',
            grade: '',
            subGrade: null
        })
    }

    onGradeChanged(event) {
        this.setState({
            grade: parseFloat(event.target.value)
        })
    }

    calculate() {
        const result = this.state.subOption === 'G1' ?
            21 - (this.state.grade * 2) :
            (21 - this.state.grade) / 2

        this.setState({
            subGrade: result
        })
    }

    showResult() {
        if (this.state.subGrade) {
            return <b>Sua nota na sub deverá ser {this.state.subGrade}</b>
        }

        return null
    }

    render() {
        return (
            <div>
                <h1>Calculadora Nota de Sub</h1>

                <label>
                    <input type="radio" value="G1" checked={this.state.subOption === 'G1'}
                        onChange={event => this.onSubOptionChanged(event)} /> Sub G1
                </label>
                <label>
                    <input type="radio" value="G2" checked={this.state.subOption === 'G2'}
                        onChange={event => this.onSubOptionChanged(event)} /> Sub G2
                </label>

                <br /><br />
                Nota {this.state.gradeOption}: <br />
                <input type="number" value={this.state.grade} onChange={event => this.onGradeChanged(event)} />

                <br />
                <input type="button" value="Calcular" onClick={() => this.calculate()} />

                <br />
                {this.showResult()}
            </div>
        )
    }
}

export default App