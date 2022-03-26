import React,{ Component }  from 'react';
import {bindActionCreators} from   'redux'
import{connect} from 'react-redux'
import {getList} from './billingCycleAction'

class BillingCycleList extends Component{
componentWillMount(){
    this.props.getList()
    console.log(this.props.getList())
}

    renderRows(){
        const list = this.props.list || []
        return list.map(bc=>(
            <tr key={cd.id}>
              <td>{bc.name}</td>  
              <td>{bc.mes}</td>  
              <td>{bc.ano}</td>  
            </tr>
        ))
}
    render(){
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mes</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToPros = state =>({list: state.billingCycle.list})
const mapDispatcToPros = dispatch => bindActionCreators({getList},dispatch)
export default connect(mapStateToPros,mapDispatcToPros) (BillingCycleList)