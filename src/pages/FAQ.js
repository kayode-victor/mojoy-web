import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabIndex) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  const faqList = [
    {
      question: "What is your return policy?",
      answer:
        "If you're not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us at support@mojoyicl.com with your order number and a brief explanation of why you're returning the item.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team by emailing us at support@mojoyicl.com, or by calling us at (+234)813-109-8419 between the hours of 9am and 5pm EST, Monday through Friday.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "Unfortunately, once an order has been placed, we are not able to make changes or cancellations. If you no longer want the items you've ordered, you can return them for a refund within 30 days of delivery.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only offer shipping within Nigeria.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, Mastercard, and Remita payment methods. We also have a cash on delivery system for some of our items.",
    },
  ];

  return (
    <>
      <Meta title={"FAQ"} />
      <BreadCrumb title="FAQ" />
      <section className="policy-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {faqList.map((faq, index) => (
              <div key={index} className="pb-4">
                <button
                  className="btn btn-link d-flex justify-content-between align-items-center w-100 p-0 text-dark"
                  onClick={() => toggleTab(index)}
                >
                  <span className="me-3">{faq.question}</span>
                  {activeTab === index ? (
                    <AiOutlineCloseCircle size={20} className="text-dark" />
                  ) : (
                    <FaArrowCircleDown size={20} className="text-dark" />
                  )}
                </button>

                {activeTab === index && (
                  <div className="mt-4">
                    <p className="">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
