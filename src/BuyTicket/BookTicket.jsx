import"./BookTicket.css"
import VNPAY from "/VNPAY.png"
import VietQR from "/VietQR.png"
import ZaloPay from "/ZaloPay.png"
import ShopeePay from "/ShopeePay.png"
import Visa from "/Visa.png"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { LanguageContext } from "../Context"
export default function BookTicket(){
    const [selectmethod,setSelectMethod]=useState("VNPAY")
    const {id}=useParams()
    const Language=useContext(LanguageContext)
    const[paymentSuccess,setPaymentSuccess]=useState(false);
     const[eventid,setEventid]=useState({});
    useEffect(()=>{
        axios.get(`http://localhost:3000/events/${id}`)
        .then(res=>setEventid(res.data))
        .catch(err=>console.log(err))
    },[id])
    const counts = JSON.parse(localStorage.getItem("counts")) || {};
    const totalPrice = Number(localStorage.getItem("totalPrice")) || 0;
  const handlePayment = async ()=>{
    const token=localStorage.getItem("token");
    if(token==null){
        console.log("bạn chưa đăng nhập")
    }
    const tickets= Object.entries(counts).map(([ticketId,count])=>({
        ticketId:Number(ticketId),
        count,
    }))
        const orderData={
         eventId:Number(id),
          tickets:tickets,totalPrice,
          payment_method:selectmethod,
        };
        try{
            await axios.post("http://localhost:3000/orders",orderData,{
                headers:{
                    Authorization:`Bearer ${token}`
                },
            });
            
            alert("Đặt vé thành công!")
            setPaymentSuccess(true);
        }catch(err){
         console.log(err.response?.data || err);
        }
      }  
    return(
        <>
        <div className="BookTicket">
            <img src={eventid.imgSrc} alt="" className="backgroundimg" />
        <div className="BookHead">
          <span>{eventid.title}</span>
          <div className="BookInfo">
           <div className="BookDate">
          <svg className="path" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M6.25 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h1a4 4 0 014 4v2h-20V6a4 4 0 014-4h1V1a1 1 0 011-1zM20.25 10h-20v8a2 2 0 002 2h16a2 2 0 002-2v-8z" />
         </svg> 
         <span>{eventid.timeRange},</span>
         <span>{eventid.date}</span>
           </div>
           <div className="BookLocate">
           <svg className="location-icon"  viewBox="0 0 24 24"  width="24" height="24"  fill="currentColor">
  <path  fillRule="evenodd"  clipRule="evenodd"   d="M4.031 3.307a10.514 10.514 0 0113.937 0c4.485 3.945 4.955 10.854 1.058 15.392l-7.015 8.17a1.333 1.333 0 01-2.023 0l-7.015-8.17C-.923 14.161-.454 7.252 4.031 3.307zM11 14.667A3.333 3.333 0 1011 8a3.333 3.333 0 000 6.666z" />
      </svg>    
      <span>{eventid.locate}</span>
           </div>
          </div>
        </div>
        <div className="BookBody">
            <div className="Payment">
       <span>{Language==="vi"?"THANH TOÁN":"PAYMENT"}</span>
          <div className="ticketreceive">
            <span>{Language==="vi"?"Thông tin nhân vé":"Ticket receipt"}</span>
            <p>{Language==="vi"?"Vé điện tử sẽ được hiển thị trong mục 'Vé của tôi' trong tài khoản của bạn sau khi thanh toán thành công":"The e-ticket will be displayed in 'MyTicket' section in your account after successful payment.  "}
            </p>
          </div>
          <div className="PaymentMethod">
            <span>{Language==="vi"?"Phương thức thanh toán":"Payment Method"}</span>
            <div className="Method">
            <div className="apppayment">
                <input defaultChecked type="radio" className="radiopayment" name="payment" value='VNPAY' onChange={(e)=>setSelectMethod(e.target.value)}/>
                <img src={VNPAY} alt="" />
                <span>VNPAY</span>
            </div>    
            <div className="apppayment">
                <input type="radio" className="radiopayment" name="payment" value='VietQR' onChange={(e)=>setSelectMethod(e.target.value)} />
                <img src={VietQR} alt="" />
                <span>VietQR</span>
            </div>    
            <div className="apppayment">
                <input type="radio" className="radiopayment" name="payment" value="ShopeePay" onChange={(e)=>setSelectMethod(e.target.value)}/>
                <img src={ShopeePay} alt="" />
                <span>ShopeePay</span>
            </div>    
            <div className="apppayment" >
                <input type="radio" className="radiopayment" name="payment" value="ZaloPay" onChange={(e)=>setSelectMethod(e.target.value)} />
                <img src={ZaloPay} alt="" />
                <span>ZaloPay</span>
            </div>    
            <div className="apppayment">
                <input type="radio" className="radiopayment" name="payment" value="Visa" onChange={(e)=>setSelectMethod(e.target.value)}/>
                <img src={Visa} alt="" />
                <span>Thẻ ghi nợ/Thẻ tín dụng</span>
            </div>    
            </div>
          </div>
            </div>
            <div className="payinfo">
            <div className="PaymentInfo">
               <span className="Paymentinfo">{Language==="vi"?"Thông tin đặt vé":"Ticket booking information"}</span>
               <div className="PaymentInfoform">
               <div className="titleInfoPrice">
                <span>{Language==="vi"?"Loại vé":"Type"}</span>
                <span>{Language==="vi"?"Số Lượng":"Quantity"}</span>
               </div> 
               {eventid.tickets?.map((ticket)=>{
                    const count=counts[ticket.id] || 0;
                    if(count==0) return null;
                    return (
                           <div className="infoandprice" key={ticket.id}>
                <div className="infoprice">
                <span>{ticket.type}</span>
                <span>{count}</span>
                </div>        
                 <div className="infoprice">
                 <span>{Number(ticket.price).toLocaleString('vi-VN')} </span>
                 <span>{Number(ticket.price*count).toLocaleString('vi-VN')}</span>
                </div>
               </div>
                    )
               })}
               </div>
            </div>
            <div className="Orderinfo">
                  <span>{Language==='vi'?"Thông tin đơn hàng":"Order information"}</span>
                  <div className="Subtotal">
                  <span>{Language==='vi'?"Tạm tính":"Subtotal"}</span>
                  <span>{Number(totalPrice).toLocaleString('vi-VN')} VND</span>
                  </div>
                  <div className="Total">
                    <div className="totalform">
                        <span>Total</span>
                        <span className="pricetotal">{Number(totalPrice).toLocaleString('vi-VN')} VND</span>
                    </div>
                    <p>By proceeding the order , you agree to the 
                        General Trading Conditions
                    </p>
                    <button onClick={handlePayment} disabled={paymentSuccess} className={`PaymentButton ${paymentSuccess ? "Success" : ""}`}>{paymentSuccess?(Language==="vi"?"Thanh toán thành công":"Payment successful"):(Language==="vi"?"Thanh toán":"Payment")}</button>
                  </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}