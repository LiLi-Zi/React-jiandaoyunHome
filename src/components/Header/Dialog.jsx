import React,{Component} from "react";
import { createPortal } from "react-dom";
import './Dialog.css';

export default class Dialog extends Component{
    constructor(props){
        super(props);
        this.node = document.createElement('div');
        this.state = {
            showList:false,
            product:{title:'产品',showList:false,list:[
                {title:'业务逻辑',showList:false,list:['在线表单','业务流程','仪表盘']},
                {title:'5大控制中心',showList:false,list:['组织架构','权限体系','消息通知','移动协作','外部互联']},
                {title:'5大特色能力',showList:false,list:['数据预警','自定义打印','OCR','BPA','个性化']},
                {title:'5大控制中心2',showList:false,list:['CRM','知识库']}
            ]},
            content:[
                
                {title:'方案',showList:false,list:['CRM','供应商管理','进销存','轻量化MES','项目管理','流程ERP','设备管理','疫情防控','100+方案']},
                {title:'案例',showList:false,list:[]},
                {title:'定价',showList:false,list:['价格','私有云']},
                {title:'资源中心',showList:false,list:['帮助中心','资料下载','学习路径','前言文章','视频课程','论坛交流']},
                {title:'零代码',showList:false,list:['关于零代码','全民开发']},

            ],
        };
       
    }
    componentDidMount(){
        document.body.appendChild(this.node);
    }
    componentWillUnmount(){
        document.body.removeChild(this.node);
    }
    handleCancel=()=>{
        this.props.changeData(false);
    }
    toggleList(n){
        
        const boxList = document.getElementsByClassName('box-list')[n];
        const arrow = document.getElementsByClassName('arrow')[n];
        if(this.state.content[n].showList){
            this.setState(state=>{
                state.content[n].showList = false;
                return {content:state.content}
            });
            boxList.style.display = 'none';
            boxList.parentNode.firstChild.style.color = '#000';
            arrow.innerHTML = '&#9660;';
        }else{
            this.setState(state=>{
                state.content[n].showList = true;
                return {content:state.content}
            });
            boxList.style.display = 'block';
            boxList.parentNode.firstChild.style.color = '#0DB3A6';
            arrow.innerHTML = '&#9650;';
        }
    }
    toggleProduct(n){
        const boxList = document.getElementsByClassName('product-title-box-list')[n];
        const arrow = document.getElementsByClassName('product-title-arrow')[n];
        if(this.state.product.showList){
            this.setState(state=>{
                state.product.showList = false;
                return {product:state.product}
            });
            boxList.style.display = 'none';
            boxList.parentNode.firstChild.style.color = '#000';
            arrow.innerHTML = '&#9660;';
        }else{
            this.setState(state=>{
                state.product.showList = true;
                return {product:state.product}
            });
            boxList.style.display = 'block';
            boxList.parentNode.firstChild.style.color = '#0DB3A6';
            arrow.innerHTML = '&#9650;';
        }
    }
    toggleProductList(n){
        const boxList = document.getElementsByClassName('product-box-list')[n];
        const arrow = document.getElementsByClassName('product-arrow')[n];
        if(this.state.product.list[n].showList){
            this.setState(state=>{
                state.product.list[n].showList = false;
                return {product:state.product}
            });
            boxList.style.display = 'none';
            arrow.innerHTML = '&#9660;';
        }else{
            this.setState(state=>{
                state.product.list[n].showList = true;
                return {product:state.product}
            });
            boxList.style.display = 'block';
            
            arrow.innerHTML = '&#9650;';
        }
    }
    render(){
        if(this.props.control){
        return createPortal(
            <div className="dialog-modal" onClick={this.handleCancel}>
                <div className="dialog-box" onClick={(e)=>{e.stopPropagation()}}>

                    <div className="box-title">
                        <p>{this.state.product.title}<span className="product-title-arrow" onClick={this.toggleProduct.bind(this,0)}>&#9660;</span></p>
                        
                        <ul className="product-title-box-list">
                            {this.state.product.list.map((item,index)=>
                                <div key={item.title}>
                                <p>{item.title}<span className="product-arrow" onClick={this.toggleProductList.bind(this,index)}>&#9660;</span></p>
                                    <ul className="product-box-list">
                                        {item.list.map((n)=>
                                            <li key={n}>{n}</li>
                                        )}
                                    </ul>
                                </div>
                                
                            )}
                        </ul>
                        
                    </div>
                    
                    {this.state.content.map((item,index)=>
                        <div className="box-title" key={item.title}>
                            <p>{item.title}<span className="arrow" onClick={this.toggleList.bind(this,index)}>&#9660;</span></p>
                            <ul className="box-list">
                               {item.list.map(n=>
                                <li key={n}>{n}</li>
                               )}
                            </ul>
                        </div>
                    )}
                  
                </div>
            </div>
           
        
        ,this.node)
        }else{
            return null 
        }
    }
}