import './containerCropDemand.css'
import {useState} from 'react';

function ContainerCropDemand(){
    const [content] = useState([
        {src:'https://blog-assets.jiandaoyun.com/index/home/home_demand1.png',name:'工作台',info:'个性化工作台，一站式进行应用管理、流程办理、报表查看'},
        {src:'	https://blog-assets.jiandaoyun.com/index/home/home_demand2.png',name:'通讯录',info:'支持灵活的企业级通讯录设置，以及细颗粒度权限体系'},
        {src:'	https://blog-assets.jiandaoyun.com/index/home/home_demand3.png',name:'应用互通',info:'支持跨应用取数，跨表单数据预计算，避免业务孤岛'},
        {src:'https://blog-assets.jiandaoyun.com/index/home/home_demand4.png',name:'数据工厂',info:'支持对基础数据深加工，在仪表盘中实现更深度的数据分析'},
        {src:'	https://blog-assets.jiandaoyun.com/index/home/home_demand5.png',name:'开发API',info:'支持将简道云与其他产品/系统对接，打通数据孤岛'},
        {src:'	https://blog-assets.jiandaoyun.com/index/home/home_demand6.png',name:'自定义',info:'自定义登录、打印、提交等，满足个性化开发需求'},
        {src:'	https://blog-assets.jiandaoyun.com/index/home/home_demand7.png',name:'知识库',info:'个性在线编写文档，发布规章制度文件，沉淀团队经验和知识'},
        {src:'		https://blog-assets.jiandaoyun.com/index/home/home_demand8.png',name:'多端使用',info:'支持PC/Mobile多端使用，支持集成钉钉/企业微信/飞书等平台'},

    ]);

    return(
        <div className='containerCropDemand'>
            <div className='bricks'>
                <div className='bricks-primary-title'>更多企业级扩展功能，满足多样化管理需求</div>
                <div className='demand-content'>
                    {content.map(item=>
                        <div className='list-item' key={item.name}>
                            <img src={item.src} alt=''></img>
                            <span className='name'>{item.name}</span>
                            <span className='info'>{item.info}</span>
                        </div>
                    ) }
                </div>
                
            </div>
        </div>
    )
}

export default ContainerCropDemand;