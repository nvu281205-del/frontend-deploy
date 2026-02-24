
import React, { useEffect, useState } from 'react';
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register({loginRef,ref}){
    const navigate=useNavigate()
      const[error,setError]=useState("");
      const [password,setPassword]=useState("");
      const[confirm,setConfirm]=useState("");
      const[samepass,setSamepass]=useState(false)
      const [email,setEmail]=useState("");
      const [etouched, setEtouched] = useState(false);
      const[ptouched,setPtouched]=useState(false);
      const[ctouched,setCtouched]=useState(false);
      const[showpw,setShowpw]=useState(false);
      const[showcf,setShowcf]=useState(false);

      function handleClose(){
        ref.current.close();
      }
      function handleEmail(e){
        const v=e.target.value;
        setEmail(v);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setValidemail(emailRegex.test(v));
        setError("");
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
    const isFormValid=validemail&&isPasswordValid&&samepass;

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
        const res= await axios.post('https://backend-pro-sirs.onrender.com/auth/register',
             {email,password},
           { headers:{'Content-Type':'application/json'}}
        );       
        localStorage.setItem("token",res.data.token.access_token);
        localStorage.setItem("refreshtoken",res.data.token.refresh_token)
         ref.current.close();
        navigate('/Account')
        window.location.reload()
        }catch(err){
            setError(err.response?.data?.message);
        }     
    }
    return (
        <> 
        <dialog ref={ref} className='Register-dialog'>
        <form method='dialog' onSubmit={handleSubmit}>
            <div className='Register-header'>
            <span>Đăng ký tài khoản</span>
    <button onClick={handleClose} className='Register-closebtn'> <span style={{fontSize:"14px"}}> ✖</span></button>
            </div>
            <div className='Register-body'>
            <div className='input'>
               <div className='form-field'>  
                <div className={`form-input ${ email===""?etouched?"input-error":"":validemail?error?"input-error":"input-valid":"input-error"}`}>
            <input type="text" onBlur={()=>setEtouched(true)}  value={email} onChange={handleEmail}  placeholder='Nhập email của bạn'              /></div>
               <span className='form-error'>{etouched&&email===""?"Nhập email của bạn":!validemail?"Email sai định dạng":error||""}</span>
               </div> 
                 <div className='form-field'>  
              <div className={`form-input ${password===""?ptouched?"input-error":"":isPasswordValid?"input-valid":"input-error"}`}>
                 <input type={showpw?'text':'password'}value={password} onBlur={()=>setPtouched(true)} onChange={handlePassword}placeholder='Nhập mật khẩu' />
         {showpw&&  <svg viewBox="64 64 896 896" onClick={()=>setShowpw(!showpw)} focusable="false" data-icon="eye"  width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>}
            {!showpw&& <svg viewBox="64 64 896 896" onClick={()=>setShowpw(!showpw)} focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path></svg>}
                </div>    
                <span className='form-error'>{ptouched&&password===""?"Nhập mật khẩu":""}</span>
                </div>  
                <div className='form-field'>
             <div className={`form-input ${confirm===""?ctouched?"input-error":"":samepass?"input-valid":"input-error"}`}>
                <input type={showcf?'text':'password'}value={confirm} onBlur={()=>setCtouched(true)} autoComplete="off" onChange={handleConfirmPassword} placeholder='Nhập lại mật khẩu' />
            {showcf&&  <svg viewBox="64 64 896 896" onClick={()=>setShowcf(!showcf)} focusable="false" data-icon="eye"  width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>}
            {!showcf&& <svg viewBox="64 64 896 896" onClick={()=>setShowcf(!showcf)} focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path></svg>}
                  
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
            
             <button type='submit' onClick={handleSubmit} className={`loginbtn ${isFormValid?"enable":"disable"}`} disabled={!isFormValid}>Tiếp tục</button>  
            </div>
        </form>
        </dialog>
        </>
    )
}