
import './Register.css'
export default function Register({loginRef,ref}){
    function showModal(){
        ref.current.close()
        loginRef.current.showModal();
    }
    return (
        <> 
        <dialog ref={ref} className='Regisdialog'>
        <form method='dialog'>
            <div className='regisstart'>
            <span>Đăng ký tài khoản</span>
    <button className='closebutton'> <span style={{fontSize:"14px"}}> ✖</span></button>
            </div>
            <div className='regisgoing'>
            <div className='input'>
                <div className='inputtype'> <input type="text" placeholder='Nhập email của bạn' /></div>
               
              <div className='inputtype'>
                 <input type="password" placeholder='Nhập mật khẩu' />
           <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                </div>       
             <div className='inputtype'>
                <input type="password" placeholder='Nhập lại mật khẩu' />
            <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
            </div>   
            </div>
             <div className='valispace'>
             <div className='validate'>
                <div className='validating'>
                     <span className='testvalidate'>✖</span>
                    <p>Mật khẩu chưa hợp lệ</p>
                </div>
                 <div className='validatingmn'>
                     <span className='testvalidatemn'>✖</span>
                    <span>Từ 8 - 23 kí tự</span>
                </div>
                 <div className='validatingmn'>
                     <span className='testvalidatemn'>✖</span>
                    <span>Bao gồm chữ thường và số</span>
                </div>
                 <div className='validatingmn'>
                     <span className='testvalidatemn'>✖</span>
                    <span>Bao gồm kí tự đặc biệt(!,$,@,*,...)</span>
                </div>
                 <div className='validatingmn'>
                     <span className='testvalidatemn'>✖</span>
                    <span>Có ít nhất 1 kí tự in hoa</span>
                </div>  
            </div>
            </div>
             <div className='bottom'>
                <span>Đã có tài khoản?</span>
                <span className='register' onClick={showModal}>Đăng nhập ngay</span>
                  
            </div>
             <button className='login'>Tiếp tục</button>  
            </div>
            
           
           
            
        </form>
        </dialog>
        </>
    )
}