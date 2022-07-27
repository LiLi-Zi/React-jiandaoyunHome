import './containerCropValue.css'
// import Swiper core and required modules
import { useState } from 'react';
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ContainerCropValue(){
    const [content] = useState([
        {
            logosrc:'https://blog-assets.jiandaoyun.com/index/home/home_corp1_m.png',
            imgsrc:'	https://blog-assets.jiandaoyun.com/index/home/home_corp_logo_01.png',
            info:'简道云的零代码开发在更大的范围内，让业务用户感受到数字化转型带来的效果，加速了数字化的落地；同时在需要不断尝试的业务场景中，零代码的快速开发迭代提供了很低的试错成本，孵化了一批新工具新方法。',
            name:'郑炯',
            intro:'蒙牛乳业信息技术高级总监',
        },
        {
            logosrc:'	https://blog-assets.jiandaoyun.com/index/home/home_corp2_m.png',
            imgsrc:'	https://blog-assets.jiandaoyun.com/index/home/home_corp_logo_02.png',
            info:'零代码开发这种无门槛的开发方式盘活了全公司信息化推进的热情和效率，简道云也打破了原先集团信息化一阶段的数据孤岛困局。未来企业发展将继续向数据要生产力，这不单单是信息部门的工作。',
            name:'伍学纲',
            intro:'东方日升新能源股份有限公司 CIO',
        },
        {
            logosrc:'	https://blog-assets.jiandaoyun.com/index/home/home_corp3_m.png',
            imgsrc:'	https://blog-assets.jiandaoyun.com/index/home/home_corp_logo_03.png',
            info:'对中国赛艇协会来说，简道云把各模块的数据整合到了一起，且能很便捷地实现个性化分析，工作效率得到质的提升。现在赛艇协会产生数据方面的新业务需求时，就会直接用简道云迅速开发出一套demo，这些需求基本上都可以在一天内完成。',
            name:'谭威正',
            intro:'中国赛艇协会  数据总监',
        },
        {
            logosrc:'	https://blog-assets.jiandaoyun.com/index/home/home_corp4_m.png',
            imgsrc:'https://blog-assets.jiandaoyun.com/index/home/home_corp_logo_04.png',
            info:'龙辉利用简道云的零代码开发平台，针对企业管理和生产的不同场景，一年时间开发了200多个应用，实现低成本、高效能实现数字化管理。',
            name:'和大龙',
            intro:'山东龙辉起重机械有限公司 CEO',
        },
        {
            logosrc:'	https://blog-assets.jiandaoyun.com/index/home/home_corp5_m.png',
            imgsrc:'	https://blog-assets.jiandaoyun.com/index/home/home_corp_logo_05.png',
            info:'开发者就是应用者，应用者就是开发者。我们通过简道云平台搭建了学校基本所有的管理的场景，而且这些应用都来自于老师们的提议，所以大家对于这些应用就有了情感。',
            name:'刘公社',
            intro:' 河南扶沟实验小学 校长',
        }
    ]);
    return(
        <div className='containerCropValue'>
            <div className='bricks'>
                <div className='bricks-primary-title'>把想法快速变成显示，为企业贡献多元价值</div>
                <div className='bricks-description'>不同规模与性质的企业和组织都能找到适合的零代码解决方案</div>
            </div>
            <div className='tab-box'>
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={'auto'}
               
                pagination={{ 
                    clickable: true,
                   
                }}
                
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                {content.map(item=>
                     <SwiperSlide key={item.name}>
                    
                     <a className='img-crop' href='/'>
                         <img className='crop-logo' src={item.logosrc} alt='as'/> 
                     </a>
                     <div className='txt-box'>
                         <div className='txt-content'>
                             <img src={item.imgsrc} alt=''></img>
                             <div className='txt-info'>{item.info}</div>
                             <span className='txt-name'>{item.name} <span className='color-grey'>{item.intro}</span></span>
                             <a className='look-more' href='/'>查看使用方案&gt;&gt;</a>
                         </div>
                     </div>
                     </SwiperSlide>   
                )}    
               
               
                </Swiper>
            </div>
        </div>
    )
}
export default ContainerCropValue;