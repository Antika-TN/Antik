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

    return (
      <div>
        <div className="Footer" style={{ width: 1197, height: 202, left: 122, top: 2226, position: "absolute" }}></div>
        <div className="Banner" style={{ width: 1040, height: 542, left: 201, top: 147, position: "absolute" }}>
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
          <button className="Vector" style={{ width: 40, height: 30, left: 290, top: 230, position: "absolute", background: "transparent", border: "none", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => console.log("ok3")}>
            <FaCamera style={{ color: "black", width: 19, height: 20 }} />
          </button>
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
          <img className="Rectangle1906" style={{ width: 95, height: 91, left: 20, top: 65, position: "absolute", borderRadius: 4 }} src={''} alt="Photo" />
        </div>
        <div className="FeedSec1" style={{ width: 666, height: 532, left: 575, top: 769, position: "absolute" }}>
          <img className="Ellipse248" style={{ width: 43, height: 43, left: 0, top: 0, position: "absolute", borderRadius: "50%" }} src={''} alt="Profile" />
          <div className="FarhanKhan" style={{ left: 56, top: 0, position: "absolute", color: "white", fontSize: 20, fontFamily: "SF Pro Display", fontWeight: "600", wordWrap: "break-word" }}>{sellerData.companyName}</div>
          <div className="Farhan" style={{ left: 56, top: 27, position: "absolute", color: "rgba(255, 255, 255, 0.50)", fontSize: 16, fontFamily: "SF Pro Display", fontWeight: "400", wordWrap: "break-word" }}>@farhan</div>
          <div className="M" style={{ left: 178, top: 2, position: "absolute", color: "rgba(255, 255, 255, 0.50)", fontSize: 16, fontFamily: "SF Pro Display", fontWeight: "400", wordWrap: "break-word" }}>4m</div>
          <img className="Rectangle1901" style={{ width: 666, height: 426, left: 0, top: 106, position: "absolute", borderRadius: 5 }} src={''} alt="Feed" />
        </div>
      </div>
    );
  }

  return <div>No data</div>;
};

export default ProductPage;
