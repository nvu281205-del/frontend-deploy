import"./BookTicket.css"
import Music1 from "/Music/img1.jpg"
import VNPAY from "/VNPAY.png"
import VietQR from "/VietQR.png"
import ZaloPay from "/ZaloPay.png"
import ShopeePay from "/ShopeePay.png"
import Visa from "/Visa.png"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
export default function BookTicket(){
    const {id}=useParams()
     const[eventid,setEventid]=useState({});
    useEffect(()=>{
        axios.get(`http://localhost:3000/events/${id}`)
        .then(res=>setEventid(res.data))
        .catch(err=>console.log(err))
    },[id])
    return(
        <>
        <div className="BookTicket">
            <img src={Music1} alt="" className="backgroundimg" />
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
       <span>THANH TOÁN</span>
          <div className="ticketreceive">
            <span>Thông tin nhận vé</span>
            <p>Vé điện tử sẽ được hiển thị trong
            mục "Vé của tôi" của tài khoản nvu281205@gmail.com 
            </p>
          </div>
          <div className="PaymentMethod">
            <span>Phương thức thanh toán</span>
            <div className="Method">
            <div className="apppayment">
                <input type="radio" className="radiopayment" name="payment" />
                <img src={VNPAY} alt="" />
                <span>VNPAY/Ứng dụng ngân hàng</span>
            </div>    
            <div className="apppayment">
                <input type="radio" className="radiopayment" name="payment" />
                <img src={VietQR} alt="" />
                <span>VietQR</span>
            </div>    
            <div className="apppayment">
                <input type="radio" className="radiopayment" name="payment"/>
                <img src={ShopeePay} alt="" />
                <span>ShopeePay</span>
            </div>    
            <div className="apppayment" >
                <input type="radio" className="radiopayment" name="payment" />
                <img src={ZaloPay} alt="" />
                <span>ZaloPay</span>
            </div>    
            <div className="apppayment">
                <input type="radio" className="radiopayment" name="payment" />
                <img src={Visa} alt="" />
                <span>Thẻ ghi nợ/Thẻ tín dụng</span>
            </div>    
            </div>
          </div>
            </div>
            <div className="payinfo">
            <div className="PaymentInfo">
               <span>Thông tin đặt vé</span>
               <div className="PaymentInfoform">
               <div className="type">
                <span>Loại vé</span>
               <div className="infoandprice">
                <span>General Access</span>
                <span>575.000</span>
               </div>
               </div>
               <div className="quantity">
                <span>Số Lượng</span>
                <div className="quantityandprice">
                    <span>04</span>
                    <span>1200000đ</span>
                </div>
               </div>
               </div>
            </div>
            <div className="Orderinfo">
                  <span>Thông tin đơn hàng</span>
                  <div className="Subtotal">
                  <span>Tạm tính</span>
                  <span>1.150.000đ</span>
                  </div>
                  <div className="Total">
                    <div className="totalform">
                        <span>Total</span>
                        <span className="pricetotal">1.500.000đ</span>
                    </div>
                    <p>By proceeding the order , you agree to the 
                        General Trading Conditions
                    </p>
                    <button className="PaymentButton">Payment</button>
                  </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}