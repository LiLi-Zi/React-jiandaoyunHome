import React from 'react';
class HeaderMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={};


    }
    mouseover(n){
        const list = document.getElementsByClassName('solution-list')[n];
        list.style.display = 'flex';
        const sBox=document.getElementsByClassName('s-box')[n]; 
        sBox.style.color = '#0DB3A6';
    }   
    mouseleave(n){
        const sBox=document.getElementsByClassName('s-box')[n]; 
        const list = document.getElementsByClassName('solution-list')[n];
        list.style.display = 'none';
        sBox.style.color = '#000';
    }
    render(){
        return(
            <div className='menu'>  
                <div className='menu-item' onMouseOver={this.mouseover.bind(this,0)} onMouseLeave={this.mouseleave.bind(this,0)}>
                    <div className='s-box'>产品&#8744;</div>
                    <div className='solution-list'>
                        <ul className='solution-list-item'>
                            <div>业务引擎</div>
                            <li>在线表单</li>
                            <li>仪表盘</li>
                        </ul>
                        <ul className='solution-list-item'>
                            <div>5大控制中心</div>
                            <li>组织架构</li>
                            <li>权限体系</li>
                            <li>消息通知</li>
                            <li>移动协作</li>
                            <li>外部互联<sup>Hot</sup></li>
                        </ul>
                        <ul className='solution-list-item'>
                            <div>5大特色能力</div>
                            <li>数据预警</li>
                            <li>自定义打印</li>
                            <li>OCR</li>
                            <li>BPA</li>
                            <li>个性化</li>
                        </ul>
                        <ul className='solution-list-item'>
                            <div>场景套件</div>
                            <li>CRM<sup>Hot</sup></li>
                            <li>知识库</li>
                        </ul>
                    </div>
                </div>
                <div className='menu-item' onMouseOver={this.mouseover.bind(this,1)} onMouseLeave={this.mouseleave.bind(this,1)}>
                    <div className='s-box'>方案&#8744;</div>
                    <div className='solution-list'>
                        <ul className='solution-list-item'>
                            <li>供应商管理<sup>Hot</sup></li>
                            <li>进销存</li>
                            <li>项目管理</li>
                            <li>设备管理</li>
                        </ul>
                        <ul className='solution-list-item'>
                            
                            <li>CRM<sup>Hot</sup></li>
                            <li>轻量化MES</li>
                            <li>流程ERP</li>
                            <li>疫情防控</li>
                        </ul>
                    </div>
                </div>
                <div className='menu-item' onMouseOver={this.mouseover.bind(this,2)} onMouseLeave={this.mouseleave.bind(this,2)}>
                    <div className='s-box'>案例</div>
                    <div className='solution-list'>
                    </div>
                </div>
                <div className='menu-item' onMouseOver={this.mouseover.bind(this,3)} onMouseLeave={this.mouseleave.bind(this,3)}>
                    <div className='s-box'>定价&#8744;</div>
                    <div className='solution-list'>
                        <ul className='solution-list-item'>                      
                            <li>价格</li>
                            <li>私有云</li>
                        </ul>
                        
                    </div>
                </div>
                <div className='menu-item' onMouseOver={this.mouseover.bind(this,4)} onMouseLeave={this.mouseleave.bind(this,4)}>
                    <div className='s-box'>资源中心&#8744;</div>
                    <div className='solution-list'>
                        <ul className='solution-list-item'>
                            <li>帮助中心</li>
                            <li>学习路径</li>
                            <li>视频课程</li>
                            
                        </ul>
                        <ul className='solution-list-item'>
                            
                            <li>资料下载</li>
                            <li>前沿文章</li>
                            <li>论坛交流</li>
                            
                        </ul>
                    </div>
                </div>
                <div className='menu-item' onMouseOver={this.mouseover.bind(this,5)} onMouseLeave={this.mouseleave.bind(this,5)}>
                    <div className='s-box'>零代码&#8744;</div>
                    <div className='solution-list'>
                        <ul className='solution-list-item'>
                            <li>关于零代码</li>
                            <li>全民开发</li>
                            
                        </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMenu;