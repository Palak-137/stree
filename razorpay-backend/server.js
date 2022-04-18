import  express from  "express";
import  path from  "path";
import  Razorpay from  "razorpay";
import  shortid from  "shortid";
import  bodyParser from  "body-parser";
import  crypto from  "crypto";
import cors from "cors";
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import sessionStorage from "sessionstorage";
import fetch,{Headers} from "node-fetch";

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

if ('development' === 'development') {
  app.use(morgan('dev'))
}

app.use(cors());
app.use(bodyParser.json());

var razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.get("/logo.svg", (req, res) => {
  res.sendFile(path.join(__dirname, "logo.svg"));
});

app.use('/api/users', userRoutes)

app.post("/verification", (req, res) => {
  const secret = "razorpaysecret";

  console.log(req.body);

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    res.status(200).json({
      message: "OK",
    });
  } else {
    res.status(403).json({ message: "Invalid" });
  }
});

let temp;

app.post("/sendinfo", async (req, res)=>{
  temp = await req.body;
  console.log("req", "mil gyi", temp);
  sessionStorage.setItem("data", JSON.stringify(temp));
  convert(temp);
})

function convert (info) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
  
  };

  fetch(`https://v1.nocodeapi.com/lethal/cx/IZtAEmWXQglrwzmf/rates/convert?amount=${info.amount}&from=${info.senderCurrency}&to=${info.receiverCurency}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          //console.log(JSON.parse(result).result);
          sessionStorage.setItem("amount",JSON.parse(result).result)
          console.log("converted", sessionStorage.getItem("amount"));
        })
    .catch(error => console.log('error', error));
  
}


app.post("/razorpay", async (req, res) => {
  const payment_capture = 1;

  const temp = JSON.parse(sessionStorage.getItem("data"));
  console.log("dssda", temp);
  
  const amount = parseInt(sessionStorage.getItem("amount"));
  const receiver = temp.receiver;
  const currency = temp.receiverCurency;
  const senderCurrency = temp.senderCurrency;
  

  
  
  
  const options = {
    amount,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  console.log(options);

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.status(200).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log(err);
  }
});


const PORT = process.env.PORT || 1337;

if ('development' === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)




app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
