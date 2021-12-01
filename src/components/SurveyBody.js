import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  const [consumer, setConsumer] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [newRetailerName, setNewRetailerName] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q4dot1, setQ4dot1] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q5dot1, setQ5dot1] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q6dot1, setQ6dot1] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q7dot1, setQ7dot1] = useState(null);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleSearch = () => {
    fetch(`http://67.21.32.75:6011/dMatched/${searchNumber}`)
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setNotFound(true);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    console.log(e.target.value);
    setQ3(e.target.value);
  };
  const retailerName = (e) => {
    setNewRetailerName(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q4dot1value = (e) => {
    setQ4dot1(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q5dot1value = (e) => {
    setQ5dot1(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q6dot1value = (e) => {
    setQ6dot1(e.target.value);
  };
  const q7value = (e) => {
    setQ7(e.target.value);
  };
  const q7dot1value = (e) => {
    setQ7dot1(e.target.value);
  };

  const agent = sessionStorage.getItem("agent");
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      ans2: q2,
      ans3: q3,
      newRetailerName: newRetailerName,
      ans4: q4,
      ans4dot1: q4dot1,
      ans5: q5,
      ans5dot1: q5dot1,
      ans6: q6,
      ans6dot1: q6dot1,
      ans7: q7,
      ans7dot1: q7dot1,
      agentID: agent,
      callDate: new Date().toLocaleDateString(),
      callTime: new Date().toLocaleTimeString(),
    };
    fetch(`http://67.21.32.75:6011/answers/${consumer?._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(answer);
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div
        style={{
          display: consumer === null ? "none" : "block",
        }}
      >
        <h6>
          ১. আসসালামুআলাইকুম, আমি কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা
          বলছি?
        </h6>
        <p className="text-secondary">
          (উত্তর যাই হোক, পরবর্তী ২নং প্রশ্নে চলে যান)
        </p>
        <Form.Group onChange={q1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === "yes" || q1 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ২. আমি একটি রিসার্চ কোম্পানি থেকে ফোন করেছি । আমি কি আপনার সাথে একটু
          কথা বলতে পারি?
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুনবা কথা শেষ করে
          সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
            <option value="busy">ব্যাস্ত</option>
          </Form.Control>
        </Form.Group>
      </div>
      <p
        className="font-weight-bold"
        style={{ display: q2 === "yes" ? "block" : "none" }}
      >
        * আপনার অবগতির জন্য জানানো যাচ্ছে যে কলটি রেকর্ড করা হচ্ছে এবং আপনার
        ব্যাক্তিগত তথ্য ভবিষ্যতে পর্যালোচনা এর কাজে ব্যবহার করা হতে পারে।
      </p>
      <div
        style={{ display: q2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৩. স্যার, আপনার দোকানের নাম কী<b> {consumer?.outlet_name} ?</b>
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুবা সঠিক দোকানের নাম
          লিপিবদ্ধ করে নিবে)
        </p>
        <Form.Group onChange={q3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div style={{ display: q3 === "no" ? "block" : "none" }} className="mt-2">
        <h6>
          <b>দোকানের নাম : </b>
        </h6>
        <Form.Group onChange={retailerName} as={Row}>
          <Form.Control
            className="w-25 ml-3"
            type="text"
            placeholder="Enter Retailer Name"
          />
        </Form.Group>
      </div>
      <div
        style={{
          display:
            (newRetailerName !== null || q3 === "yes") &&
            consumer?.week_name === "week_1"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৪. স্যার আপনি কি বন্ধন দোকানদার হিসেবে একটি বন্ধন টি-শার্ট পেয়েছেন?
        </h6>
        <p className="text-secondary">(উত্তর হ্যা না যাই হোক, লিপিবদ্ধ করুন)</p>
        <Form.Group onChange={q4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q4 === "yes" || q4 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>৪.১ স্যার আপনি কি বন্ধনের টিজার ভিডিও দেখছেন ?</h6>
        <p className="text-secondary">
          (প্রথম সপ্তাহে একটি লোগো উন্মোচণ এর ভিডিও দেখানো হয়েছিল টি এম এস এর
          ডিভাইসের মাধ্যমে )
        </p>
        <Form.Group onChange={q4dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            (newRetailerName !== null || q3 === "yes") &&
            consumer?.week_name === "week_2"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৫. স্যার আপনি কি বন্ধন দোকানদার হিসেবে একটি ইউনিলিভার গিফট হ্যাম্পার
          পেয়েছেন?
        </h6>
        <p className="text-secondary">(উত্তর হ্যা না যাই হোক, লিপিবদ্ধ করুন)</p>
        <Form.Group onChange={q5value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q5 === "yes" || q5 === "no" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৫.১ স্যার আপনি কি বন্ধনের রিটেইলার ফিল্ম দেখেছেন?</h6>
        <p className="text-secondary">
          (দ্বিতীয় সপ্তাহে একজন দোকানদার এর জীবনের গল্প দেখানো হয়েছিল একটি ফিল্ম
          এর মাধ্যমে)
        </p>
        <Form.Group onChange={q5dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            (newRetailerName !== null || q3 === "yes") &&
            consumer?.week_name === "week_3"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৬. স্যার আপনি কি বন্ধন দোকানদার হিসেবে একটি আপনার ছবি বাধাই করা একটি
          ফটোফ্রেম পেয়েছেন?
        </h6>
        <p className="text-secondary">(উত্তর হ্যা না যাই হোক, লিপিবদ্ধ করুন)</p>
        <Form.Group onChange={q6value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q6 === "yes" || q6 === "no" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৬.১ স্যার আপনি কি বন্ধনের থিম সং মিউজিক ভিডিও দেখছেন ?</h6>
        <p className="text-secondary">
          (তৃতীয় সপ্তাহে একটি থিম সং এর মিউজিক ভিডিও দেখানো হবে টি এম এস এর
          ডিভাইসের মাধ্যমে)
        </p>
        <Form.Group onChange={q6dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            (newRetailerName !== null || q3 === "yes") &&
            consumer?.week_name === "week_4"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৭. স্যার আপনি কি বন্ধন দোকানদার হিসেবে আপনার তথ্য সম্বলিত একটি বন্ধন
          ব্র্যান্ডের বিজনেস কার্ড পেয়েছেন?
        </h6>
        <p className="text-secondary">(উত্তর হ্যা না যাই হোক, লিপিবদ্ধ করুন)</p>
        <Form.Group onChange={q7value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q7 === "yes" || q7 === "no" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৭.১ স্যার আপনি কি বন্ধনের ড্যান্স পারফর্মেন্স ভিডিও দেখছেন ?</h6>
        <p className="text-secondary">
          (চতুর্থ সপ্তাহে একটি ড্যান্স পারফর্মেন্স দেখানো হবে টি এম এস এর
          ডিভাইসের মাধ্যমে)
        </p>
        <Form.Group onChange={q7dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display:
            q2 === "no" ||
            q2 === "busy" ||
            q4dot1 === "no" ||
            q4dot1 === "yes" ||
            q5dot1 === "no" ||
            q5dot1 === "yes" ||
            q6dot1 === "no" ||
            q6dot1 === "yes" ||
            q7dot1 === "no" ||
            q7dot1 === "yes"
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>ধন্যবাদ স্যার, আপনার মূল্যবান সময় দেয়ার জন্য।</h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
