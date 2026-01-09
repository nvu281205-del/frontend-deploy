
import { useEffect, useState } from 'react';
import './Register.css'
export default function Register({loginRef,ref}){
      
      const [password,setPassword]=useState("");
      const[confirm,setConfirm]=useState("");
      const[samepass,setSamepass]=useState(false)
      const [email,setEmail]=useState("");
      const [etouched, setEtouched] = useState(false);
      const[ptouched,setPtouched]=useState(false);
      const[ctouched,setCtouched]=useState(false);
    
      function handleEmail(e){
        const v=e.target.value;
        setEmail(v);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setValidemail(emailRegex.test(v));
      }
      function showModal(){
        ref.current.close()
        loginRef.current.showModal();
    }
    function handlePassword(e){
         setPassword(e.target.value);
    }
    function handleConfirmPassword(e){
         setConfirm(e.target.value);
    }
    useEffect(()=>{
        setSamepass(confirm===password);
    },[confirm,password]);  
    const islength=password.length>=8 && password.length<=32;
    const isNumberAndLower = /[a-z]/.test(password) && /\d/.test(password);
    const isSpecialChar=/[!?*@&^%$(),]/.test(password);
    const isUpper=/[A-Z]/.test(password);
    const isPasswordValid = islength && isNumberAndLower && isSpecialChar && isUpper;
    const[validemail,setValidemail]=useState(true);
      const isFormValid=validemail&&isPasswordValid&samepass;
    
    return (
        <> 
        <dialog ref={ref} className='Register-dialog'>
        <form method='dialog'>
            <div className='Register-header'>
            <span>Đăng ký tài khoản</span>
    <button className='Register-closebtn'> <span style={{fontSize:"14px"}}> ✖</span></button>
            </div>
            <div className='Register-body'>
            <div className='input'>
               <div className='form-field'>  
                <div className={`form-input ${ email===""?etouched?"input-error":"":validemail?"input-valid":"input-error"}`}>
            <input type="text" onBlur={()=>setEtouched(true)}  value={email} onChange={handleEmail}  placeholder='Nhập email của bạn'              /></div>
               <span className='form-error'>{etouched&&email===""?"Nhập email của bạn":validemail?"":"Email sai định dạng"}</span>
               </div> 
                 <div className='form-field'>  
              <div className={`form-input ${password===""?ptouched?"input-error":"":isPasswordValid?"input-valid":"input-error"}`}>
                 <input type="password" value={password} onBlur={()=>setPtouched(true)} onChange={handlePassword}placeholder='Nhập mật khẩu' />
           <svg viewBox="64 64 896 896" focusable="false" data-icon="eye"  width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                </div>    
                <span className='form-error'>{ptouched&&password===""?"Nhập mật khẩu":""}</span>
                </div>  
                <div className='form-field'>
             <div className={`form-input ${confirm===""?ctouched?"input-error":"":samepass?"input-valid":"input-error"}`}>
                <input type="password"value={confirm} onBlur={()=>setCtouched(true)} autoComplete="off" onChange={handleConfirmPassword} placeholder='Nhập lại mật khẩu' />
            <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
            </div>
             <div className='form-error'>{ctouched&&confirm===""?"Xác nhận mật khẩu":samepass?"":"Mật khẩu không trùng nhau"}</div>
            </div> 
            </div>
             <div className='password-rules'>
             <div className={isPasswordValid?"passrules-valid":"passrules-invalid"}>
                <div className='pass-summary'>
            {isPasswordValid?<span className='icon-valid'>✔</span>:<span className='icon-invalid'>✖</span>}         
                 {isPasswordValid? <p style={{color:'rgb(45, 194, 117)'}}>Mật khẩu hợp lệ</p>: <p>Mật khẩu chưa hợp lệ</p>}  
                </div>
                 <div className='pass-rule'>
                {islength?<span className='rule-valid'>✔</span>:<span className='rule-invalid'>✖</span>}    
                    <span>Từ 8 - 23 kí tự</span>
                </div>
                 <div className='pass-rule'>
                   {isNumberAndLower?<span className='rule-valid'>✔</span>:<span className='rule-invalid'>✖</span>}  
                    <span>Bao gồm chữ thường và số</span>
                </div>
                 <div className='pass-rule'>
                  {isSpecialChar?<span className='rule-valid'>✔</span>:<span className='rule-invalid'>✖</span>}   
                    <span>Bao gồm kí tự đặc biệt(!,$,@,*,...)</span>
                </div>
                 <div className='pass-rule'>
                 {isUpper?<span className='rule-valid'>✔</span>:<span className='rule-invalid'>✖</span>}    
                    <span>Có ít nhất 1 kí tự in hoa</span>
                </div>  
            </div>
            </div>
             <div className='bottom'>
                <span>Đã có tài khoản?</span>
                <span className='register' onClick={showModal}>Đăng nhập ngay</span>
                  
            </div>
             <button className={`loginbtn ${isFormValid?"enable":"disable"}`} disabled={!isFormValid}>Tiếp tục</button>  
            </div>
        </form>
        </dialog>
        </>
    )
}