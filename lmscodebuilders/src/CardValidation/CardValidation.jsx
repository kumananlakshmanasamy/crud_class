import { useState } from "react";
import validator from 'validator';
const ValidateCard = () => {
const [credit,setcredit] = useState('')
const [errormessage,seterrormessage] = useState('')
const [flag,setflag] = useState(false)
const validateCreditCard = (cardNumber) => {
   if  (validator.isCreditCard(cardNumber)) {
        seterrormessage('Valid Credit Card Number')
        setflag(true)
    } else if (cardNumber == ''){
        seterrormessage('')
    }else{
        seterrormessage('Invalid Credit Card Number')
        setflag(false)
    }
}
return (
    <div style={{display:'flex',
        flexDirection:'column',
        alignItems:'center',
        fontFamily:'Arial ,sans-serif',
        padding:'40px',
        backgroundColor:'lightblue',
        height:'100vh',
    }}>
        <div style={{backgroundColor:'#101b30',padding:"30px",borderRadius:'10px',width:'100%',boxShadow:'0 0 10px #000',maxWidth:'550px'}}>
            <h2 style={{color:'#fff',marginBottom:'20px'}}>Credit card Validator</h2>  
            <label style={{marginBottom:'10px',display:'block',color:'#aaa'}}>Enter Credit Card Number:</label>
            <input 
                type="text"
                value={credit}
                onChange={(e)=> {setcredit(e.target.value) , validateCreditCard(e.target.value)}}
                placeholder="Enter Credit Card Number"
                style={{width:'100%',padding:'10px',fontSize:'18px',border:'1px solid #ccc',borderRadius:'5px',marginBottom:'20px',outline:'none'}}
            />
            <div style={{fontWeight:'600', color:flag? "#44ed23":'red'}}>{errormessage}</div>
        </div>
    </div>
)

}
export default ValidateCard;