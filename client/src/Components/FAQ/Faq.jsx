import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./Style.css";

const Faq = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggle = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <span className="faq-subtitle">Wanna Ask Something?</span>
      <div className="faq-list">
        <div className="faq-list-left">
          <div className="faq-item-left">
            <p className="faq-question">How can I determine the authenticity of an antique item?</p>
            <div className="faq-toggle" onClick={() => handleToggle(0)}>
              {expandedItems.includes(0) ? (
                <AiOutlineMinus className="faq-icon" />
              ) : (
                <AiOutlinePlus className="faq-icon" />
              )}
            </div>
            {expandedItems.includes(0) && (
              <div className="faq-answer">
                <p>
                  Authenticity of an antique item can be determined through various factors such as historical research, expert opinions, provenance documentation, markings or signatures, quality of materials and craftsmanship, and comparison with known examples. Consulting reputable antique appraisers or specialists can provide valuable insights and authentication services.
                </p>
              </div>
            )}
          </div>
          <div className="faq-item-left">
            <p className="faq-question">What are the shipping and delivery options for antique purchases?</p>
            <div className="faq-toggle" onClick={() => handleToggle(1)}>
              {expandedItems.includes(1) ? (
                <AiOutlineMinus className="faq-icon" />
              ) : (
                <AiOutlinePlus className="faq-icon" />
              )}
            </div>
            {expandedItems.includes(1) && (
              <div className="faq-answer">
                <p>
                  Shipping and delivery options for antique purchases depend on the seller and their policies. It can include options such as domestic and international shipping, various carriers or freight services, insurance coverage, and tracking. It's recommended to check with the seller or online antique shop for specific shipping details and any associated costs.
                </p>
              </div>
            )}
          </div>
          <div className="faq-item-left">
            <p className="faq-question">Is it possible to return or exchange an antique item if it doesn't meet my expectations?</p>
            <div className="faq-toggle" onClick={() => handleToggle(2)}>
              {expandedItems.includes(2) ? (
                <AiOutlineMinus className="faq-icon" />
              ) : (
                <AiOutlinePlus className="faq-icon" />
              )}
            </div>
            {expandedItems.includes(2) && (
              <div className="faq-answer">
                <p>
                  Yes, it's usually possible to return or exchange an antique item if it doesn't meet your expectations. However, the specific return and exchange policies may vary between different online antique shops or sellers. It's recommended to review the shop's terms and conditions or contact their customer support for information on their return and exchange policy.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="faq-list-right">
          <div className="faq-item-right">
            <p className="faq-question">How do you ensure the safe packaging and handling of fragile antique pieces?</p>
            <div className="faq-toggle" onClick={() => handleToggle(3)}>
              {expandedItems.includes(3) ? (
                <AiOutlineMinus className="faq-icon" />
              ) : (
                <AiOutlinePlus className="faq-icon" />
              )}
            </div>
            {expandedItems.includes(3) && (
              <div className="faq-answer">
                <p>
                  We take utmost care in packaging and handling fragile antique pieces to ensure their safe delivery. Our team of experts uses high-quality packaging materials, such as bubble wrap, foam, and sturdy boxes, to provide adequate protection. We also work with trusted shipping partners who understand the importance of handling delicate items with care during transit.
                </p>
              </div>
            )}
          </div>
          <div className="faq-item-right">
            <p className="faq-question">Are there any special care instructions for maintaining the condition of antique items?</p>
            <div className="faq-toggle" onClick={() => handleToggle(4)}>
              {expandedItems.includes(4) ? (
                <AiOutlineMinus className="faq-icon" />
              ) : (
                <AiOutlinePlus className="faq-icon" />
              )}
            </div>
            {expandedItems.includes(4) && (
              <div className="faq-answer">
                <p>
                  Yes, antique items may require specific care to maintain their condition. It's recommended to avoid direct exposure to sunlight, extreme temperatures, and high humidity. Regular dusting with a soft, non-abrasive cloth is advisable. For certain materials, such as wood or metal, appropriate cleaning methods and protective treatments may be necessary. Consult our care guidelines or reach out to our experts for personalized advice based on the specific item.
                </p>
              </div>
            )}
          </div>
          <div className="faq-item-right">
            <p className="faq-question">Can you provide additional information or provenance documentation for specific antique pieces?</p>
            <div className="faq-toggle" onClick={() => handleToggle(5)}>
              {expandedItems.includes(5) ? (
                <AiOutlineMinus className="faq-icon" />
              ) : (
                <AiOutlinePlus className="faq-icon" />
              )}
            </div>
            {expandedItems.includes(5) && (
              <div className="faq-answer">
                <p>
                  Yes, we strive to provide as much information and provenance documentation as possible for our antique pieces. Our experts conduct thorough research to gather historical details and background information. In some cases, we may also have provenance documentation, such as certificates of authenticity or previous ownership records, available for select items. Feel free to reach out to us with specific inquiries, and we'll gladly assist you in obtaining additional information about the antique pieces of interest.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
