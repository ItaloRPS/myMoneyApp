import React,{Component}  from 'react';
import {bindActionCreators}from 'redux'
import {connect}from 'react-redux'
import If from '../operador/if'

import {selectTab} from './tabAction'

class TabHeader extends Component{
    render(){
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        console.log(this.props)
    
        return (
            <If test={visible}>
            <li className={selected?'active':''}>
                <a href="javascript:" data-toggle="tab" 
                        onClick={()=>this.props.selectTab(this.props.target)}
                    data-target={this.props.target} > 
                    <i className={` fa fa-${this.props.icon}`}></i>
                    {this.props.label}
                </a>
            </li>
            </If>
        )
    }
    
}

const mapStateToProps = state =>({tab:state.tab})
const mapDispatToProps = dispatch =>bindActionCreators({selectTab},dispatch)
export default connect(mapStateToProps,mapDispatToProps)(TabHeader)
