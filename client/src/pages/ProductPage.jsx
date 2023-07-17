import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const ProductPage = () => {
  const [isUser, setIsUser] = useState(null);
  const [sellerData, setSellerData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  const [uploadFile, setUploadFile] = useState("");
 const [imgUrl,setImgUrl]=useState('')
  const [uploadFile1, setUploadFile1] = useState("");
 const [imgUrl1,setImgUrl1]=useState('')


  const [form] = Form.useForm();

  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post(`http://localhost:3003/products/${categoryId}/products`, values, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      console.log("Product created successfully:", response.data.data);
      // Close the popup form
      setShowPopup(false);
    } catch (error) {
      console.error("Error creating product:", error);
      // Handle error
    }
  };


  const handleAddProductClick = () => {
    setShowPopup(!showPopup);
  };

  console.log(loading);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setIsUser(decodedToken.id);
      console.log("id", decodedToken.id);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log(isUser);
      try {
        const sellerResponse = await axios.get(`http://localhost:3003/sellers/${isUser}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        setSellerData(sellerResponse.data.data);
        setCategoryId(sellerResponse.data.data.id);
        console.log("seller responseeeeeee", sellerResponse.data.data);

        axios.get(`http://localhost:3003/products/${sellerResponse.data.data.id}/products`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }).then((productsResponse) => {
          setProducts(productsResponse.data.data);
          console.log("products response", productsResponse.data.data);
          setLoading(true);
        })

      } catch (error) {
        console.log("error", error);
      }

    };

    if (isUser) {
      fetchData();
    }
  }, [isUser]);

  if (!loading) {
    return <div>Loading...</div>;
  }

  if (loading) {
    console.log("sellerData", sellerData);
    console.log("userData", userData);
    console.log("products", products);

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
    const uploadImage1 =async () => {
      const form = new FormData();
      form.append("file", uploadFile1);
      form.append("upload_preset", "farescloud");
      console.log(form)
      await axios.post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", form).then((res) => {
        console.log(res.data.secure_url)
       setImgUrl1(res.data.secure_url)
       
      })
      .catch((err)=>{console.log(err)})
    };


    return (
      <div>
        <div className="Footer" style={{ width: 1197, height: 202, left: 122, top: 2226, position: "absolute" }}></div>
        <div className="Banner" style={{ width: 1040, height: 542, left: 201, top: 147, position: "absolute" }}>

        <div className="CoverImage" style={{ width: 1040, height: 355, left: 0, top: 0, position: "absolute", background: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)", borderRadius: 5 }}>
  <img src={imgUrl} alt="Cover" style={{ width: "100%", height: "100%", borderRadius: 5 }} />
</div>
          <div className="EditCoverImage" style={{ width: 49, height: 49, padding: 10, left: 971, top: 287, position: "absolute", background: "#6C5DD3", borderRadius: 150, justifyContent: "center", alignItems: "center", gap: 10, display: "flex" }}>
            <button className="Vector" style={{ width: 49, height: 49, background: "transparent", border: "none", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => uploadImage()}>
              <AiOutlineEdit style={{ color: "black", width: 19, height: 20 }} />
            </button>
            <input type="file" onChange={(e)=>{setUploadFile(e.target.files[0])}}/>

          <div className="CoverImage" style={{ width: 1040, height: 355, left: 0, top: 0, position: "absolute", background: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)", borderRadius: 5 }}></div>
          <div className="EditCoverImage" style={{ width: 49, height: 49, padding: 10, left: 971, top: 287, position: "absolute", background: "#6C5DD3", borderRadius: 150, justifyContent: "center", alignItems: "center", gap: 10, display: "flex" }}>
            <button className="Vector" style={{ width: 49, height: 49, background: "transparent", border: "none", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => console.log("ok1")}>
              <AiOutlineEdit style={{ color: "black", width: 19, height: 20 }} />
            </button>

          </div>
        </div>
        <div className="EditProfile" style={{ width: 164, height: 30, padding: 10, left: 1062, top: 518, position: "absolute", background: "#6C5DD3", borderRadius: 150, justifyContent: "center", alignItems: "center", gap: 10, display: "flex" }}>
          <button className="Vector" style={{ width: 50, height: 20, background: "transparent", border: "none", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => console.log("ok2")}>
            <AiOutlineEdit style={{ color: "black", width: 19, height: 20 }} />
          </button>
          <div className="EditProfile" style={{ color: "white", fontSize: 16, fontFamily: "SF Pro Display", fontWeight: "600", wordWrap: "break-word" }}>add product</div>
        </div>
        {showPopup && (
          <div className="PopupForm">
            <Form form={form} onFinish={handleFormSubmit}>
              <Form.Item name="name" rules={[{ required: true, message: 'Please enter the product name' }]}>
                <Input placeholder="Product Name" />
              </Form.Item>
              <Form.Item name="description" rules={[{ required: true, message: 'Please enter the product description' }]}>
                <TextArea rows={4} placeholder="Product Description" />
              </Form.Item>
              <Form.Item name="price" rules={[{ required: true, message: 'Please enter the product price' }]}>
                <Input type="number" placeholder="Product Price" />
              </Form.Item>
              <Form.Item name="stock" rules={[{ required: true, message: 'Please enter the product stock' }]}>
                <Input type="number" placeholder="Product Stock" />
              </Form.Item>
              <Form.Item>
              <Button type="primary" htmlType="submit">Create Product</Button>
              </Form.Item>
            </Form>
          </div>
        )}
     <div className="ProfilePic" style={{ width: 120, height: 124, left: 460, top: 285, position: "absolute" }}>
  <img className="Ellipse251" style={{ width: 120, height: 120, left: 200, top: 150, position: "absolute", borderRadius: "50%", border: "1.50px white solid" }} src={''} alt="Profile" />
  <div className="Ellipse252" style={{ width: 31, height: 31, left: 294, top: 230, position: "absolute", background: "#6C5DD3", borderRadius: "50%" }}></div>
  <button className="Vector" style={{ width: 40, height: 30, left: 290, top: 230, position: "absolute", background: "transparent", border: "none", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => uploadImage1()}>
    <FaCamera style={{ color: "black", width: 19, height: 20 }} />
  </button>
  <input type="file" onChange={(e) => setUploadFile1(e.target.files[0])} />
</div>
        <div className="Text" style={{ width: 896, height: 115, left: 71, top: 427, position: "absolute" }}>
          <div className="FarhanKhan" style={{ left: 572, top: 144, position: "absolute", color: "white", fontSize: 28, fontFamily: "SF Pro Display", fontWeight: "600", wordWrap: "break-word" }}>{sellerData?.companyName}</div>
          <div className="Farhan" style={{ left: 623, top: 190, position: "absolute", color: "rgba(255, 255, 255, 0.40)", fontSize: 18, fontFamily: "SF Pro Display", fontWeight: "400", wordWrap: "break-word" }}>@farhan</div>
        </div>

        <div className="PhotosSec" style={{ width: 345, height: 371, left: 200, top: 771, position: "absolute" }}>
          <div className="Group48095548" style={{ width: 345, height: 371, left: 0, top: 0, position: "absolute" }}>
            <div className="Rectangle1905" style={{ width: 345, height: 371, left: 0, top: 0, position: "absolute", background: "rgba(255, 255, 255, 0.10)", borderRadius: 5 }}></div>
            <div className="Photos" style={{ left: 20, top: 20, position: "absolute", color: "white", fontSize: 20, fontFamily: "SF Pro Display", fontWeight: "600", letterSpacing: 0.2, wordWrap: "break-word" }}>Photos</div>
            <div className="SeeAllPhotos" style={{ left: 221, top: 23, position: "absolute", color: "#6C5DD3", fontSize: 16, fontFamily: "SF Pro Display", fontWeight: "600", letterSpacing: 0.16, wordWrap: "break-word" }}>See All Photos</div>
          </div>

          <div className="PhotosSec" style={{width: 345, height: 371, position: 'relative'}}>
  <div className="Group48095548" style={{width: 345, height: 371, left: 0, top: 0, position: 'absolute'}}>
    <div className="Rectangle1905" style={{width: 345, height: 371, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.10)', borderRadius: 5}} />
    <div className="Photos" style={{left: 20, top: 20, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.20, wordWrap: 'break-word'}}>Photos</div>
    <div className="SeeAllPhotos" style={{left: 221, top: 23, position: 'absolute', color: '#6C5DD3', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>See All Photos</div>
  </div>
  <img className="Rectangle1906" style={{width: 95, height: 91, left: 20, top: 65, position: 'absolute', borderRadius: 4}} src="https://www.antikahane.net/wp-content/uploads/2019/11/Anasayfa2-min.jpg" />
  <img className="Rectangle1909" style={{width: 95, height: 91, left: 20, top: 166, position: 'absolute', borderRadius: 4}} src="https://loozap.com/storage/files/tn/tal_17-04-2021/thumb-816x460-loozap_tunisie_0e_0ee675f0-e81a-43cf-8053-167cbf2e50f0" />
  <img className="Rectangle1912" style={{width: 95, height: 91, left: 20, top: 267, position: 'absolute', borderRadius: 4}} src="https://ajansuniversite.istanbul.edu.tr/wp-content/uploads/antika-9-1024x682.jpg" />
  <img className="Rectangle1907" style={{width: 95, height: 91, left: 125, top: 65, position: 'absolute', borderRadius: 4}} src="https://tn.loozap.com/ads/antika/24695104.html?curr=USD" />
  <img className="Rectangle1910" style={{width: 95, height: 91, left: 125, top: 166, position: 'absolute', borderRadius: 4}} src="data:image/jpeg;base64,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" />
  <img className="Rectangle1913" style={{width: 95, height: 91, left: 125, top: 267, position: 'absolute', borderRadius: 4}} src="https://www.fammech.com/upload/big/vente-pleine-des-choses-antika-20120903065900.jpg" />
  <img className="Rectangle1908" style={{width: 95, height: 91, left: 230, top: 65, position: 'absolute', borderRadius: 4}} src="https://loozap.com/storage/files/tn/tal_08-03-2022/thumb-816x460-loozap_tunisie_mkk2v0f__402cbf5e-001b-414d-adf0-2d5bf7aca193" />
  <img className="Rectangle1911" style={{width: 95, height: 91, left: 230, top: 166, position: 'absolute', borderRadius: 4}} src="https://i.etsystatic.com/26692417/r/il/b936a3/3477305850/il_300x300.3477305850_ebc1.jpg" />
</div>          

        </div>
        <div className="FeedSec1" style={{ width: 666, height: 532, left: 575, top: 769, position: "absolute" }}>
          <img className="Ellipse248" style={{ width: 43, height: 43, left: 0, top: 0, position: "absolute", borderRadius: "50%" }} src={''} alt="Profile" />
          <div className="FarhanKhan" style={{ left: 56, top: 0, position: "absolute", color: "white", fontSize: 20, fontFamily: "SF Pro Display", fontWeight: "600", wordWrap: "break-word" }}>{sellerData.companyName}</div>
          <div className="Farhan" style={{ left: 56, top: 27, position: "absolute", color: "rgba(255, 255, 255, 0.50)", fontSize: 16, fontFamily: "SF Pro Display", fontWeight: "400", wordWrap: "break-word" }}>@farhan</div>
          <div className="M" style={{ left: 178, top: 2, position: "absolute", color: "rgba(255, 255, 255, 0.50)", fontSize: 16, fontFamily: "SF Pro Display", fontWeight: "400", wordWrap: "break-word" }}>4m</div>
        <img className="Rectangle1901" style={{ width: 666, height: 426, left: 0, top: 106, position: "absolute", borderRadius: 5 }} src={'https://i.etsystatic.com/26692417/r/il/b936a3/3477305850/il_300x300.3477305850_ebc1.jpg'} alt="Feed" />

        </div>
      </div>
    );
  }

  return <div>No data</div>;
};

export default ProductPage;
