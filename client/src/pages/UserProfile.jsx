import React, { useEffect , useState} from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import axios from 'axios';

const UserProfile = () => {

 const [client,setclient]=useState([])
 const [refresh,setRefresh]= useState(false)
 const [toggle, setToggle] = useState(false)
 const [toggle1, setToggle1] = useState(false)
 const [uploadFile, setUploadFile] = useState("");


 const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
 


 useEffect(() => {
  axios
  .get("http://localhost:3000/clients/")
  .then((response)=>{
    setclient(response.data[0])
  })
  .catch((error)=>{
    console.error(error);
  })
}, [refresh])
const uploadImage =async () => {
  const form = new FormData();
  form.append("file", uploadFile);
  form.append("upload_preset", "farescloud");
  console.log(form)
  await axios.post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", form).then((res) => {
    console.log(res.data.secure_url)
   setImgUrl(res.data.secure_url)
   
  })
  .catch((err)=>{console.log(err)})
};

const updateClient = function(firstName,lastName,address,phoneNumber,createdAt,updatedAt,id){ 
  axios
  .put(`http://localhost:3000/clients/${id}`,
  {firstName:firstName,
  lastName:lastName,
  address:address,
  phoneNumber:phoneNumber,
createdAt:createdAt,
updatedAt:updatedAt
})
 
  .then((response)=>{
    console.log(response.data)
    setRefresh(!refresh)
  })
  .catch((error)=>{
    console.error(error);
  })
}

  return (
    <div>
    
      <div
        className="Banner"
        style={{
          width: 1040,
          height: 542,
          left: 201,
          top: 147,
          position: "absolute",
        }}
      >
        <div
          className="CoverImage"
          style={{
            width: 1040,
            height: 355,
            left: 0,
            top: 0,
            position: "absolute",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)",
            borderRadius: 5,
          }}
        ></div>
        <div
          className="EditCoverImage"
          style={{
            width: 49,
            height: 49,
            padding: 10,
            left: 971,
            top: 287,
            position: "absolute",
            background: "#6C5DD3",
            borderRadius: 150,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "flex",
          }}
        >
          <button
            className="Vector"
            style={{
              width: 49,
              height: 49,
              background: "transparent",
              border: "none",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => console.log("ok1")}
          >
            <AiOutlineEdit style={{ color: "black", width: 19, height: 20 }} />
          </button>
        </div>
      </div>
      <div
        className="EditProfile"
        style={{
          width: 164,
          height: 30,
          padding: 10,
          left: 1062,
          top: 518,
          position: "absolute",
          background: "#6C5DD3",
          borderRadius: 150,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          display: "flex",
        }}
      >
        <button
          className="Vector"
          style={{
            width: 50,
            height: 20,
            background: "transparent",
            border: "none",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setToggle1(!toggle1)}
        >
          <AiOutlineEdit style={{ color: "black", width: 19, height: 20 }} />
        </button>
        <div
          className="EditProfile"
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "SF Pro Display",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          Edit Profile
        </div>

        {toggle1 && (
      <div className='input'>
        <input className='firstName-input' placeholder='First Name' onChange={(e)=>(setFirstName(e.target.value))} />  
        <input className='lastName-input' placeholder='Last Name' onChange={(e)=>(setLastName(e.target.value))} />
        <input className='address-input' placeholder='address' onChange={(e)=>(setAddress(e.target.value))} />
        <input className='phoneNumber-input' placeholder='Phone Number' onChange={(e)=>(setPhoneNumber(e.target.value))} />
        <input className='createdAt-input' placeholder='Created At' onChange={(e)=>(setCreatedAt(e.target.value))} />
        <input className='updatedAt-input' placeholder='Updated At' onChange={(e)=>(setUpdatedAt(e.target.value))} />
        <button className='edit'  onClick={()=>{updateClient(firstName,lastName,address,phoneNumber,createdAt,updatedAt,client.id)}} >Edit</button>
     </div>
     )}
      </div>

      
      <div
        className="ProfilePic"
        style={{
          width: 120,
          height: 124,
          left: 460,
          top: 285,
          position: "absolute",
        }
      }
      >
   


   <img
          className="Ellipse251"
          style={{
            width: 120,
            height: 120,
            left: 200,
            top: 150,
            position: "absolute",
            borderRadius: "50%",
            border: "1.50px white solid",
          }}
          src="https://via.placeholder.com/120x120"
          alt="Profile"
        />
        <div
          className="Ellipse252"
          style={{
            width: 40,
            height: 40,
            left: 294,
            top: 230,
            position: "absolute",
            background: "#6C5DD3",
            borderRadius: "50%",
          }}
        ></div>
        <button
          className="Vector"
          style={{
            width: 60,
            height: 60,
            left: 290,
            top: 230,
            position: "absolute",
            background: "transparent",
            border: "none",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setToggle(!toggle)} 
        >
         Edit
        </button>
        {toggle && (
       <form className='upload'>
     
       <div>
         <input type="file" onChange ={(event) => {setUploadFile(event.target.files[0]);}}/>
       </div>
      <button onClick={()=>{uploadImage()}} > Upload File</button>
     </form> 
      )}
      </div>

  
 

      <div
        className="Text"
        style={{
          width: 896,
          height: 115,
          left: 71,
          top: 427,
          position: "absolute",
        }}
      >
        <div
          className="FarhanKhan"
          style={{
            left: 572,
            top: 144,
            position: "absolute",
            color: "white",
            fontSize: 28,
            fontFamily: "SF Pro Display",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
         {client.firstName +" " + client.lastName}
        </div>
        <div
          className="Farhan"
          style={{
            left: 623,
            top: 190,
            position: "absolute",
            color: "rgba(255, 255, 255, 0.40)",
            fontSize: 18,
            fontFamily: "SF Pro Display",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          @{client.firstName + client.lastName}
        </div>
      </div>
      <div
        className="PhotosSec"
        style={{
          width: 345,
          height: 371,
          left: 200,
          top: 771,
          position: "absolute",
        }}
      >
        <div
          className="Group48095548"
          style={{
            width: 345,
            height: 371,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="Rectangle1905"
            style={{
              width: 345,
              height: 371,
              left: 0,
              top: 0,
              position: "absolute",
              background: "rgba(255, 255, 255, 0.10)",
              borderRadius: 5,
            }}
          ></div>

              <div
            className="Rectangle1905"
            style={{
              width: 345,
              height: 371,
              left: 0,
              top: 400,
              position: "absolute",
              background: "rgba(255, 255, 255, 0.10)",
              borderRadius: 5,
            }}
          ></div>

            <div
            className="Photos"
            style={{
              left: 20,
              top: 420,
              position: "absolute",
              color: "white",
              fontSize: 20,
              fontFamily: "SF Pro Display",
              fontWeight: "600",
              letterSpacing: 0.2,
              wordWrap: "break-word",
            }}
          >
            Description
            <div>
              <h1   style={{
              // left: 221,
              top: 23,
              position: "absolute",
              color: "#6C5DD3",
              fontSize: 16,
              fontFamily: "SF Pro Display",
              fontWeight: "600",
              letterSpacing: 0.16,
              wordWrap: "break-word",
            }}>Address:</h1>

             <div className='details'> {client.address}</div>

             <h2  style={{
              // left: 221,
              top: 53,
              position: "absolute",
              color: "#6C5DD3",
              fontSize: 16,
              fontFamily: "SF Pro Display",
              fontWeight: "600",
              letterSpacing: 0.16,
              wordWrap: "break-word",
            }}>Phone Number:</h2>

             <div className='details1'> {client.phoneNumber}</div>

             <h2  style={{
              // left: 221,
              top: 93,
              position: "absolute",
              color: "#6C5DD3",
              fontSize: 16,
              fontFamily: "SF Pro Display",
              fontWeight: "600",
              letterSpacing: 0.16,
              wordWrap: "break-word",
            }}>Created At:</h2>

             <div className='details2'> {client.createdAt}</div>

            </div>
          </div>




          <div
            className="Photos"
            style={{
              left: 20,
              top: 20,
              position: "absolute",
              color: "white",
              fontSize: 20,
              fontFamily: "SF Pro Display",
              fontWeight: "600",
              letterSpacing: 0.2,
              wordWrap: "break-word",
            }}
          >
            Photos
          </div>
          <div
            className="SeeAllPhotos"
            style={{
              left: 221,
              top: 23,
              position: "absolute",
              color: "#6C5DD3",
              fontSize: 16,
              fontFamily: "SF Pro Display",
              fontWeight: "600",
              letterSpacing: 0.16,
              wordWrap: "break-word",
            }}
          >
            See All Photos
          </div>
        </div>
        <img
          className="Rectangle1906"
          style={{
            width: 95,
            height: 91,
            left: 20,
            top: 65,
            position: "absolute",
            borderRadius: 4,
          }}
          src="https://via.placeholder.com/95x91"
          alt="Photo"
        />
        <img
          className="Rectangle1909"
          style={{
            width: 95,
            height: 91,
            left: 20,
            top: 166,
            position: "absolute",
            borderRadius: 4,
          }}
          src="https://via.placeholder.com/95x91"
          alt="Photo"
        />
        <img
          className="Rectangle1912"
          style={{
            width: 95,
            height: 91,
            left: 20,
            top: 267,
            position: "absolute",
            borderRadius: 4,
          }}
          src="https://via.placeholder.com/95x91"
          alt="Photo"
        />
        <img
          className="Rectangle1907"
          style={{
            width: 95,
            height: 91,
            left: 125,
            top: 65,
            position: "absolute",
            borderRadius: 4,
          }}
          src="https://via.placeholder.com/95x91"
          alt="Photo"
        />
        <img
          className="Rectangle1910"
          style={{
            width: 95,
            height: 91,
            left: 125,
            top: 166,
            position: "absolute",
            borderRadius: 4,
          }}
          src="https://via.placeholder.com/95x91"
          alt="Photo"
        />
        <img
          className="Rectangle1913"
          style={{
            width: 95,
            height: 91,
            left: 125,
            top: 267,
            position: "absolute",
            borderRadius: 4,
          }}
          src="https://via.placeholder.com/95x91"
          alt="Photo"
        />
        <img
          className="Rectangle1908"
          style={{
            width: 95,
            height: 91,
            left: 230,
            top: 65,
            position: "absolute",
            borderRadius: 4,
          }}
          src="https://via.placeholder.com/95x91"
          alt="Photo"
        />
        <img
          className="Rectangle1911"
          style={{
            width: 95,
            height: 91,
            left: 230,
            top: 166,
            position: "absolute",
            borderRadius: 4,
          }}
          src="https://via.placeholder.com/95x91"
          alt="Photo"
        />
      </div>
      <div
        className="FeedSec1"
        style={{
          width: 666,
          height: 532,
          left: 575,
          top: 769,
          position: "absolute",
        }}
      >
        <img
          className="Ellipse248"
          style={{
            width: 43,
            height: 43,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: "50%",
          }}
          src="https://via.placeholder.com/43x43"
          alt="Profile"
        />
        <div
          className="FarhanKhan"
          style={{
            left: 56,
            top: 0,
            position: "absolute",
            color: "white",
            fontSize: 20,
            fontFamily: "SF Pro Display",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
         {client.firstName +" "+ client.lastName}
        </div>
        <div
          className="Farhan"
          style={{
            left: 56,
            top: 27,
            position: "absolute",
            color: "rgba(255, 255, 255, 0.50)",
            fontSize: 16,
            fontFamily: "SF Pro Display",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          @ {client.firstName + client.lastName}
        </div>
        <div
          className="M"
          style={{
            left: 178,
            top: 2,
            position: "absolute",
            color: "rgba(255, 255, 255, 0.50)",
            fontSize: 16,
            fontFamily: "SF Pro Display",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          4m
        </div>
        <img
          className="Rectangle1901"
          style={{
            width: 666,
            height: 426,
            left: 0,
            top: 106,
            position: "absolute",
            borderRadius: 5,
          }}
          src="https://via.placeholder.com/666x426"
          alt="Feed"
        />
      </div>
      {/* <div
        className="Footer"
        style={{
          width: 1197,
          height: 202,
          left: 122,
          top: 2226,
          position: "absolute",
        }}
      ></div> */}
    </div>
  )
}

export default UserProfile