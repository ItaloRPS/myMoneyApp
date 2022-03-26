import React,{Component}  from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import ContentHeader from "../common/templete/contentHeader"; 
import Content from "../common/templete/content"; 
import Tabs from "../common/tab/tabs"; 
import TabsHeader from "../common/tab/tabsHeader"; 
import TabsContent from "../common/tab/tabsContent"; 
import TabHeader from "../common/tab/TabHeader"; 
import TabContent from "../common/tab/tabContent"; 

import List from '../billingSicle/billingCycleList'
import Form from './billingCycleForm'

import {selectTab} from "../common/tab/tabAction"; 
import {showTabs} from "../common/tab/tabAction"; 
import {create} from "./billingCycleAction"; 

class BillingCycle extends Component{
componentWillMount(){
    this.props.selectTab('tabList')
    this.props.showTabs('tabList','tabCreat')   
}
 

    render(){
        return <div>
            <ContentHeader title='Ciclos de pagamento' small='cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'> </TabHeader>
                            <TabHeader label='Incluir' icon='plus' target='tabCreat'> </TabHeader>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'> </TabHeader>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'> </TabHeader>
                        </TabsHeader>
                        <TabsContent>
                           <TabContent id="tabList">
                                <List/>
                            </TabContent> 
                           <TabContent id="tabCreat">
                               <Form onSubmit={this.props.create}/>
                               </TabContent> 
                           <TabContent id="tabUpdate">Alterar</TabContent> 
                           <TabContent id="tabDelete">Excluir</TabContent> 
                        </TabsContent>
                    </Tabs>
                </Content>
        
        </div>
    }
}
const mapDispatToProps = dispatch =>bindActionCreators({selectTab,showTabs, create},dispatch)

export default connect(null,mapDispatToProps)(BillingCycle)
 