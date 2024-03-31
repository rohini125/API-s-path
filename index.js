import expess from 'express';
const app = expess();
app.use(expess.json());

const PORT=5000;

app.get("/order/food",(req,res)=>{
  const{menu,price,quantity}=req.query;
  const{user,country}=req.headers; 

  const totalprice=parseInt(price)*parseInt(quantity);

    res.json({
        message:`you have ordered ${quantity}  ${menu}`,
        bill:`your total bill is ${totalprice}`,
        details:`you are ${user} from ${country}`
    })
})

app.get("/food/:type",(req,res)=>{
    const {type}= req.params;
     if (type==="veg"){
         return res.json({
            message:"you  have ordered veg food"
         })
        }
    else{
        return res.json({
            message:"you have ordered non-vegfood"
        })
    }
})

app.post('/user',(req,res)=>{
    const {name,age} = req.body;

    res.json({
        message:`Hello ${name}, you are ${age} years old`
})
})
    
app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})