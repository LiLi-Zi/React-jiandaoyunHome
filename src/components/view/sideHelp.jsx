import '../../iconfont/iconfont.css'
import './sideHelp.css'
function sideHelp(){
    const goTop = function(){
        // clearInterval(timer);
      
        var timer = setInterval(function(){
            let scrolltop = document.documentElement.scrollTop;
            let step = Math.ceil(scrolltop/10);
            let leader = scrolltop-step; 
            window.scrollTo(0,leader);
            if(leader === 0){
                clearInterval(timer);
            }
        },25);
    };
    const showhelp=function(){
        const help = document.getElementsByClassName('phone-box')[0];
        help.style.display = 'block';
    };
    const hidehelp = function(){
        const help = document.getElementsByClassName('phone-box')[0];
        help.style.display = 'none';
    };
    
    return(
        <div className="sideBar">
            <div className='sideBar-online'>
                <p><span className='iconfont icon-comment-filling'></span></p>
                <p>在线</p>
                <p>咨询</p>
            </div>
            <div className='sideBar-phone' onMouseEnter={showhelp} onMouseLeave={hidehelp}>
                <p><span className='iconfont icon-telephone'></span></p>
                <p>电话</p>
                <p>咨询</p>
                <div className='phone-box'>咨询热线
                    <p style={{color:'green'}}>400-111-2222</p>
                </div>
            </div>
            <div className='sideBar-weixin'>
                <p><span className='iconfont icon-electronics'></span></p>
                <p>微信</p>
                <p>咨询</p>
            </div>
            <div className='sideBar-top' onClick={goTop}>
                <p><span className='iconfont icon-top-filling'></span></p>
                
            </div>
        </div>
    )
}
export default sideHelp;