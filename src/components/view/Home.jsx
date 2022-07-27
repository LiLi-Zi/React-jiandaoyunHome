import React from 'react';
import './Home.css';
import jdybanner from '../../images/2020jdy-indexbannera.png';
import ContainerProces from './ContainerProces';
import ContainerCropDemand from './ContainerCropDemand';
import ContainerMultiple from './ContainerMultiple';
import ContainerCropValue from './ContainerCropValue';
import ContainerCase from './ContainerCase';
import ContainerSy from './ContainerSy';
import Footer from './Footer';
import ContainerBq from './ContainerBq';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text1:['设备管理应用','生产管理应用','人事管理应用','进销存应用'],
            text2:['生产管理应用'],
            text3:['人事管理应用'],
            text4:['进销存应用'],
            
        };
    }
    componentDidMount(){
        const textbox = document.getElementById('typed');
        let num = 0;
        let index = 0;
        let word = '';
        this.timer=setInterval(()=>{           
            let getword = this.state.text1[num][index];
            word += getword;
            textbox.innerHTML = word;
            if(index === this.state.text1[num].length ){
                textbox.innerHTML = '';
                word='';
                index=0;
                if(num === this.state.text1.length-1){
                    num = 0;
                }else{
                    num++;
                }
                
            }else{
                index++;
            }
        },400);
   
    }
   componentWillUnmount(){
        clearInterval(this.timer);
   }
    render(){
        return(
            <div className='main'>
            <div className='container'>
                <a className='ad-banner' href='https://bbs.fanruan.com/2022datapower/list?race=1' target='_blank' rel="noreferrer" >
                    <div className='ad-banner-pc'></div>
                    <div className='ad-banner-mobie'></div>
                </a> 
                <div className='row'>
                    <div className='txt'>
                        <h2 style={{marginBottom:'10px'}}>零代码轻量级应用搭建平台</h2>
                        <h3>
                            <span style={{fontWeight:'normal',fontSize:'16px'}}>五分钟创建一个</span>
                            <span id='typed' className='typed'></span>
                            <span className='typedcursor' id='typedcursor'>|</span>
                        </h3>
                        <img className='image' src={jdybanner} alt='简道云平台'/>
                        <form>
                        
                            <input type='text' placeholder='请输入您的手机号' ></input>
                            <input type='button' value='免费注册'></input>
                        </form>
                    </div>
                </div> 
                
            </div>
            <div className='container-indexEntrance'>
                    <div className='row-indexEntrance'>
                        <div className='entranceBox'>
                        <div className='entranceList'>
                            <a className='entrance' href='https://www.jiandaoyun.com/index/supplier/?utm_src=fazxgysgw'>
                                <div className='entrance-img'><img class='entrance-icon' src='https://blog-assets.jiandaoyun.com/index/outsourcing/announce_icon6.png' alt='图标'></img></div>
                                <div className='entrance-content'>简道云协同型<br/>SRM</div>
                            </a>
                        </div>
                        <div className='entranceList'>
                            <a className='entrance' href='https://www.jiandaoyun.com/index/supplier/?utm_src=fazxgysgw'>
                                <div className='entrance-img'><img class='entrance-icon' src='	https://blog-assets.jiandaoyun.com/index/outsourcing/announce_icon5.png' alt='图标'></img></div>
                                <div className='entrance-content'>简道云CRM<br/>场景套件</div>
                            </a>
                        </div>
                        <div className='entranceList'>
                            <a className='entrance' href='https://www.jiandaoyun.com/index/supplier/?utm_src=fazxgysgw'>
                                <div className='entrance-img'><img class='entrance-icon' src='	https://blog-assets.jiandaoyun.com/index/outsourcing/announce_icon7.png' alt='图标'></img></div>
                                <div className='entrance-content'>疫情防控服<br/>务直通车</div>
                            </a>
                        </div>
                        <div className='entranceList'>
                            <a className='entrance' href='https://www.jiandaoyun.com/index/supplier/?utm_src=fazxgysgw'>
                                <div className='entrance-img'><img class='entrance-icon' src='	https://blog-assets.jiandaoyun.com/index/outsourcing/announce_icon8.png' alt='图标'></img></div>
                                <div className='entrance-content'>[专精特新]<br/>解决方案</div>
                            </a>
                        </div>
                        </div>
                    </div>
            </div>
            
           <ContainerProces/>
           <ContainerCropDemand/>
           <ContainerMultiple/>
            <ContainerCropValue/>
            <ContainerCase/>
            <ContainerSy/>
            <Footer/>
            <ContainerBq/>
        </div>
        )
    }
}

export default Home;