import './containerSy.css'

function ContainerSy(){
    return (
        <section className='containerSy'>
            <div className='bricks'>
                <div className='sy-box'>
                    <p>现在注册领取 15 天高级功能试用</p>
                    <form>
                        <input type='text' id='phoneBottom' placeholder='输入手机号'></input>
                        <input type='button' id='registerBottom' value='免费体验'></input>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContainerSy;