import './containerMultiple.css';
import {useState} from 'react';
function ContainerMultiple(){
    const [content] = useState([
        {bgcolor:'rgba(253,146,126,.12)',src:'	https://blog-assets.jiandaoyun.com/index/home/home_template1.png',name:'CRM',des:'客户跟进、商机管理、报表分析，支持自定义销售管理流程'},
        {bgcolor:'rgba(113,186,252,.12)',src:'	https://blog-assets.jiandaoyun.com/index/home/home_template2.png',name:'协同型供应协商',des:'助力企业打破采供协作壁垒，实现全流程、全周期的供应链闭环管理'},
        {bgcolor:'rgba(130,232,158,.12)',src:'	https://blog-assets.jiandaoyun.com/index/home/home_template3.png',name:'工程项目管理',des:'全方位提升项目进度、巡检、设备、物资、劳务管理效率'},
        {bgcolor:'rgba(244,207,84,.12)',src:'	https://blog-assets.jiandaoyun.com/index/home/home_template4.png',name:'进销存',des:'解决采购、入库、销售等管理难题，快速实现进销存个性化管理'},
        {bgcolor:'rgba(113,186,252,.12)',src:'	https://blog-assets.jiandaoyun.com/index/home/home_template5.png',name:'设备巡检',des:'一张二维码解决设备档案管理、巡检、报修、保养、预警等问题'},
        {bgcolor:'rgba(214,158,248,.12)',src:'	https://blog-assets.jiandaoyun.com/index/home/home_template6.png',name:'OA',des:'一站式解决物资、车辆、费控、审批、日报等方面的OA管理难题'},
        {bgcolor:'rgba(112,211,233,.12)',src:'	https://blog-assets.jiandaoyun.com/index/home/home_template9.png',name:'专精特精',des:'ERP、核心业务、现场管理、精益管理，助力信息化落地'},
        {bgcolor:'rgba(253,146,126,.12)',src:'	https://blog-assets.jiandaoyun.com/index/home/home_template8.png',name:'更多',des:'去方案中心了解更多'},
    ]);
    return(
        <div className='containerMultiple'>
            <div className='bricks'>
                <div className='bricks-primary-title'>丰富的行业与场景方案，开箱即用</div>
                <div className='lists'>
                    <div className='swip-wrapper'>
                        {content.map(item=>
                            <a className='swip-slide list-item'  href='/' key={item.name}>
                                <div className='item-banner' style={{backgroundColor:item.bgcolor}}>
                                    <img src={item.src} alt=''></img>
                                </div>
                                <div className='item-name'>{item.name}</div>
                                <div className='item-description'>{item.des}</div>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerMultiple;
