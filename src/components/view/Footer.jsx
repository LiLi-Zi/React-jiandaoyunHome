import './footer.css'
import {useState} from 'react';

function Footer(){
    const [content] = useState([
        {h4:'产品功能',alist:['在线表单','流程引擎','仪表盘','知识库','团队协作','更新日志','网络检测']},
        {h4:'解决方案',alist:['离散制造ERP','设备管理与巡检','订单管理_进销存','质量管理','HSE管理']},
        {h4:'了解我们',alist:['行业案例','产品定价','定制实施','帮助中心','七周年']},
        
    ]);

    const imgShow = function(){
        const img = document.getElementById('a1img');
        img.style.display='block';
    }
    const imgHide = function(){
        const img = document.getElementById('a1img');
        img.style.display='none';
    }
    return (
        <div className='footer'>
            <div className='row'>
                <ul className='f-list'>
                    {content.map(item=>
                        <li key={item.h4}>
                            <h4>{item.h4}</h4>
                            <ul>
                                <li>
                                    {item.alist.map(n=>
                                        <a href='/' key={n}>{n}</a>
                                    )}
                                </li>
                            </ul>
                        </li>
                    )}
                    <li className='lxwm'>
                        <h4>联系我们</h4>
                        <p><span className='tip'>市场合作：</span> marketing@jiandaoyun.com</p>
                        <p><span className='tip'>服务热线：</span><span className='tlt'>400-111-0890 <br/>（工作日:09:00-12:00,13:30-17:30）</span></p>
                        <p><span className='tip'>总裁办24H投诉电话:</span>133 7361 3297</p>
                        <p><span className='tip'>投诉邮箱:</span><span className='tlt'>tousu@jiandaoyun.com<br/>（您对我们的产品、服务有任何不满均可投诉）</span></p>
                        <div className='ewm'>
                            <div className='a1' onMouseEnter={imgShow} onMouseLeave={imgHide} >
                                <img  id='a1img' src='	https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-fwxewm.png' alt='二维码'></img>
                            </div>
                            <div className='a2'>
                                <a href='/' rel='nofollow'></a>
                            </div>
                            <div className='a3'>
                                <a href='/'></a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Footer;