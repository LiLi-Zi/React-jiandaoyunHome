import  React from "react";

import Dialog from "./Dialog";

class HeaderRight extends React.Component{
   constructor(props){
    super(props);
    this.state = {showDialog:false};
   }
    
    childrenCancel=(msg)=>{
       this.setState({showDialog:msg}) ;
    }
    render(){
    return (
        <div className="right-wrapper">
            <a href="javascript:;" className="loginbutton">登录</a>
            <a href="javascript:;" className="registerbutton">注册</a>
            <a href="javascript:;" className="fontchange">&#9728;简体中文 &#8744;</a>
            <a href="javascript:;" className="menu-icon" onClick={()=>{ this.setState({showDialog:true})}}>&#9776;</a>
            {/* <button onClick={()=>{this.setState({showDialog:true})}}>&#9776;</button> */}
            
            
            <Dialog control = {this.state.showDialog} changeData={this.childrenCancel} />
          
        </div>
    )
    }
}
export default HeaderRight;