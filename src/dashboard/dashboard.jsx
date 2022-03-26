import React,{Component}  from 'react';


import ContentHader from '../common/templete/contentHeader'
import Conten from '../common/templete/content'
import ValueBox from '../common/widget/valueBox'
import { connect } from 'react-redux';

import {bindActionCreators} from 'redux'
import {getSummary} from '../dashboard/dashboardActions'
 class DashBoard extends Component {
componentWillMount(){
    this.props.getSummary()
}

    render(){
        const {credit,debit} = this.props.summary
        return (
            <div>
                <ContentHader title="DashBoard" small='versão 1.0'></ContentHader>
                <Conten> 
                    <ValueBox cols="12 4" color="green" icon="bank" value={`R$${credit}`} text="total de creditos"></ValueBox>
                    <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$${debit}`} text="total de Debitos"></ValueBox>
                    <ValueBox cols="12 4" color="blue" icon="money" value={`R$${credit - debit}`} text="total de Debitos"></ValueBox>
                </Conten>
            </div>
        )
    }
 }



 const mapStateToProps = state =>({summary: state.dashboard.summary})
 const mapDispatchToProps = dispatch => bindActionCreators({getSummary},dispatch) 
 export default connect(mapStateToProps,mapDispatchToProps)(DashBoard)














 	"<MovMovimento>"+
	  "<TMOV>"
	   " <CODCOLIGADA>2</CODCOLIGADA>"+
	   " <IDMOV>-1</IDMOV>"+
	   " <CODFILIAL>1</CODFILIAL>"+
	   " <CODLOC>1.01</CODLOC>"+
	   " <CODCFO>000075</CODCFO>"+
	   " <NUMEROMOV>-1</NUMEROMOV>"+
	   " <SERIE>PVRC</SERIE>"+
	   " <CODTMV>2.1.70</CODTMV>"+
	   " <TIPO>P</TIPO>"+
	   " <STATUS>A</STATUS>"+
	   " <DATAEMISSAO>2022-03-02T00:00:00</DATAEMISSAO>"+
	   " <CODCPG>178</CODCPG>"+
	   " <VALORBRUTO>10,0000</VALORBRUTO>"+
	   " <VALORLIQUIDO>11.5000</VALORLIQUIDO>"+
	   " <VALOROUTROS>10,0000</VALOROUTROS>"+
	   " <PERCENTUALDESC>0,0000</PERCENTUALDESC>"+
	   " <VALORDESC>0,0000</VALORDESC>"+
	   " <PERCCOMISSAO>0,0000</PERCCOMISSAO>"+
	   " <QUANTIDADE>2,0000</QUANTIDADE>"+
	   " <CODTB3FLX>02</CODTB3FLX>"+
	   " <CODTB4FLX>A</CODTB4FLX>"+
	   " <CODTB5FLX>015.001</CODTB5FLX>"+
	   " <CODMOEVALORLIQUIDO>R$</CODMOEVALORLIQUIDO>"+
	   " <DATAMOVIMENTO>2022-03-02T00:00:00</DATAMOVIMENTO>"+
	   " <GEROUFATURA>0</GEROUFATURA>"+
	   " <FRETECIFOUFOB>1</FRETECIFOUFOB>"+
	   " <CODCFOAUX>CXXXXXXXXXX</CODCFOAUX>"+
	   " <CODCCUSTO>1.01</CODCCUSTO>"+
	   " <CODVEN1>02.040</CODVEN1>"+
	   " <PERCCOMISSAOVEN2>0,0000</PERCCOMISSAOVEN2>"+
	   " <CODCOLCFO>2</CODCOLCFO>"+
	   " <CODUSUARIO>4Bi</CODUSUARIO>"+
	   " <GERADOPORLOTE>0</GERADOPORLOTE>"+
	   " <CODDEPARTAMENTO>000</CODDEPARTAMENTO>"+
	   " <STATUSEXPORTCONT>0</STATUSEXPORTCONT>"+
	   " <GERADOPORCONTATRABALHO>0</GERADOPORCONTATRABALHO>"+
	   " <HORULTIMAALTERACAO>2022-03-02T15:04:35</HORULTIMAALTERACAO>"+
	   " <INDUSOOBJ>0.00</INDUSOOBJ>"+
	   " <INTEGRADOBONUM>0</INTEGRADOBONUM>"+
	   " <FLAGPROCESSADO>0</FLAGPROCESSADO>"+
	   " <ABATIMENTOICMS>0,0000</ABATIMENTOICMS>"+
	   " <HORARIOEMISSAO>2022-03-02T15:02:38</HORARIOEMISSAO>"+
	   " <USUARIOCRIACAO>4Bi</USUARIOCRIACAO>"+
	   " <DATACRIACAO>2022-03-02T00:00:00</DATACRIACAO>"+
	   " <STSEMAIL>0</STSEMAIL>"+
	   " <VALORBRUTOINTERNO>10,0000</VALORBRUTOINTERNO>"+
	   " <VINCULADOESTOQUEFL>0</VINCULADOESTOQUEFL>"+
	   " <INTEGRADOAUTOMACAO>0</INTEGRADOAUTOMACAO>"+
	   " <INTEGRAAPLICACAO>T</INTEGRAAPLICACAO>"+
	   " <DATALANCAMENTO>2022-03-02T00:00:00</DATALANCAMENTO>"+
	   " <RECIBONFESTATUS>0</RECIBONFESTATUS>"+
	   " <IDMOVCFO>90381</IDMOVCFO>"+
	   " <USARATEIOVALORFIN>0</USARATEIOVALORFIN>"+
	   " <CODCOLCFOAUX>0</CODCOLCFOAUX>"+
	   " <RATEIOCCUSTODEPTO>11.5000</RATEIOCCUSTODEPTO>"+
	   " <VALORBRUTOORIG>10,0000</VALORBRUTOORIG>"+
	   " <VALORLIQUIDOORIG>11.5000</VALORLIQUIDOORIG>"+
	   " <VALOROUTROSORIG>10,0000</VALOROUTROSORIG>"+
	   " <FLAGCONCLUSAO>0</FLAGCONCLUSAO>"+
	   " <STATUSPARADIGMA>N</STATUSPARADIGMA>"+
	   " <STATUSINTEGRACAO>N</STATUSINTEGRACAO>"+
	   " <RECCREATEDBY>4Bi</RECCREATEDBY>"+
	   " <RECCREATEDON>2022-03-02T15:04:35</RECCREATEDON>"+
	   " <RECMODIFIEDBY>4Bi</RECMODIFIEDBY>"+
	   " <RECMODIFIEDON>2022-03-02T15:04:36</RECMODIFIEDON>"+
	   " <CODCOLIGADA1>2</CODCOLIGADA1>"+
	   " <IDMOVHST>-1</IDMOVHST>"+
	  "</TMOV>"+
	"</MovMovimento>"