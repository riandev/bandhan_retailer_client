import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";
import { consumerContext } from "../App";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  // const [consumer, setConsumer] = useState(null);
  const [consumer, setConsumer] = useContext(consumerContext);
  const [notFound, setNotFound] = useState(false);

  const [q1_w1, setQ1_w1] = useState(null);
  const [q2_w1, setQ2_w1] = useState(null);
  const [q3_w1, setQ3_w1] = useState(null);

  const [q1_w2, setQ1_w2] = useState(null);
  const [q2_w2, setQ2_w2] = useState(null);
  const [q3_w2, setQ3_w2] = useState(null);

  const [q1_w3, setQ1_w3] = useState(null);
  const [q2_w3, setQ2_w3] = useState(null);
  const [q3_w3, setQ3_w3] = useState(null);

  const [q1_w4, setQ1_w4] = useState(null);
  const [q2_w4, setQ2_w4] = useState(null);
  const [q3_w4, setQ3_w4] = useState(null);

  const [newRetailerName_w1, setNewRetailerName_w1] = useState(null);
  const [newRetailerName_w2, setNewRetailerName_w2] = useState(null);
  const [newRetailerName_w3, setNewRetailerName_w3] = useState(null);
  const [newRetailerName_w4, setNewRetailerName_w4] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q4dot1, setQ4dot1] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q5dot1, setQ5dot1] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q6dot1, setQ6dot1] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q7dot1, setQ7dot1] = useState(null);
  const [status, setStatus] = useState(null);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  useEffect(() => {
    fetch("http://192.168.10.14:6011/getStatus")
      .then((res) => res.json())
      .then((data) => setStatus(data[0]?.activeWeek));
  }, []);
  const handleSearch = () => {
    fetch(
      `http://192.168.10.14:6011/dMatched?Consumer_No=${searchNumber}&status=${status}`
    )
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setNotFound(true);
  };
  //Week 1
  const q1w_1value = (e) => {
    setQ1_w1(e.target.value);
  };
  const q2w_1value = (e) => {
    setQ2_w1(e.target.value);
  };
  const q3w_1value = (e) => {
    console.log(e.target.value);
    setQ3_w1(e.target.value);
  };
  //Week 2
  const q1w_2value = (e) => {
    setQ1_w2(e.target.value);
  };
  const q2w_2value = (e) => {
    setQ2_w2(e.target.value);
  };
  const q3w_2value = (e) => {
    console.log(e.target.value);
    setQ3_w2(e.target.value);
  };
  //Week3
  const q1w_3value = (e) => {
    setQ1_w3(e.target.value);
  };
  const q2w_3value = (e) => {
    setQ2_w3(e.target.value);
  };
  const q3w_3value = (e) => {
    console.log(e.target.value);
    setQ3_w3(e.target.value);
  };
  //Week 4
  const q1w_4value = (e) => {
    setQ1_w4(e.target.value);
  };
  const q2w_4value = (e) => {
    setQ2_w4(e.target.value);
  };
  const q3w_4value = (e) => {
    console.log(e.target.value);
    setQ3_w4(e.target.value);
  };
  const retailerName_w1 = (e) => {
    setNewRetailerName_w1(e.target.value);
  };
  const retailerName_w2 = (e) => {
    setNewRetailerName_w2(e.target.value);
  };
  const retailerName_w3 = (e) => {
    setNewRetailerName_w3(e.target.value);
  };
  const retailerName_w4 = (e) => {
    setNewRetailerName_w4(e.target.value);
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
      ans1_w1: q1_w1,
      ans2_w1: q2_w1,
      ans3_w1: q3_w1,

      ans1_w2: q1_w2,
      ans2_w2: q2_w2,
      ans3_w2: q3_w2,

      ans1_w3: q1_w3,
      ans2_w3: q2_w3,
      ans3_w3: q3_w3,

      ans1_w4: q1_w4,
      ans2_w4: q2_w4,
      ans3_w4: q3_w4,

      newRetailerName_w1: newRetailerName_w1,
      newRetailerName_w2: newRetailerName_w2,
      newRetailerName_w3: newRetailerName_w3,
      newRetailerName_w4: newRetailerName_w4,

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
    fetch(`http://192.168.10.14:6011/answers/${consumer?._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
      {/* Week 1 */}
      <div
        style={{
          display:
            consumer !== null && consumer?.week_name === "week_1"
              ? "block"
              : "none",
        }}
      >
        <h6>
          ১. আসসালামুআলাইকুম, আমি কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা
          বলছি?
        </h6>
        <p className="text-secondary">
          (উত্তর যাই হোক, পরবর্তী ২নং প্রশ্নে চলে যান)
        </p>
        <Form.Group onChange={q1w_1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1_w1 === "yes" || q1_w1 === "no" ? "block" : "none",
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
        <Form.Group onChange={q2w_1value} as={Row}>
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
        style={{ display: q2_w1 === "yes" ? "block" : "none" }}
      >
        * আপনার অবগতির জন্য জানানো যাচ্ছে যে কলটি রেকর্ড করা হচ্ছে এবং আপনার
        ব্যাক্তিগত তথ্য ভবিষ্যতে পর্যালোচনা এর কাজে ব্যবহার করা হতে পারে।
      </p>
      <div
        style={{ display: q2_w1 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৩. স্যার, আপনার দোকানের নাম কী<b> {consumer?.outlet_name} ?</b>
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুবা সঠিক দোকানের নাম
          লিপিবদ্ধ করে নিবে)
        </p>
        <Form.Group onChange={q3w_1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q3_w1 === "no" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          <b>দোকানের নাম : </b>
        </h6>
        <Form.Group onChange={retailerName_w1} as={Row}>
          <Form.Control
            className="w-25 ml-3"
            type="text"
            placeholder="Enter Retailer Name"
          />
        </Form.Group>
      </div>
      {/* Week 2 */}
      <div
        style={{
          display:
            consumer !== null && consumer?.week_name === "week_2"
              ? "block"
              : "none",
        }}
      >
        <h6>
          ১. আসসালামুআলাইকুম, আমি কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা
          বলছি?
        </h6>
        <p className="text-secondary">
          (উত্তর যাই হোক, পরবর্তী ২নং প্রশ্নে চলে যান)
        </p>
        <Form.Group onChange={q1w_2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1_w2 === "yes" || q1_w2 === "no" ? "block" : "none",
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
        <Form.Group onChange={q2w_2value} as={Row}>
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
        style={{ display: q2_w2 === "yes" ? "block" : "none" }}
      >
        * আপনার অবগতির জন্য জানানো যাচ্ছে যে কলটি রেকর্ড করা হচ্ছে এবং আপনার
        ব্যাক্তিগত তথ্য ভবিষ্যতে পর্যালোচনা এর কাজে ব্যবহার করা হতে পারে।
      </p>
      <div
        style={{ display: q2_w2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৩. স্যার, আপনার দোকানের নাম কী<b> {consumer?.outlet_name} ?</b>
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুবা সঠিক দোকানের নাম
          লিপিবদ্ধ করে নিবে)
        </p>
        <Form.Group onChange={q3w_2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q3_w2 === "no" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          <b>দোকানের নাম : </b>
        </h6>
        <Form.Group onChange={retailerName_w2} as={Row}>
          <Form.Control
            className="w-25 ml-3"
            type="text"
            placeholder="Enter Retailer Name"
          />
        </Form.Group>
      </div>
      {/* Week 3 */}
      <div
        style={{
          display:
            consumer !== null && consumer?.week_name === "week_3"
              ? "block"
              : "none",
        }}
      >
        <h6>
          ১. আসসালামুআলাইকুম, আমি কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা
          বলছি?
        </h6>
        <p className="text-secondary">
          (উত্তর যাই হোক, পরবর্তী ২নং প্রশ্নে চলে যান)
        </p>
        <Form.Group onChange={q1w_3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1_w3 === "yes" || q1_w3 === "no" ? "block" : "none",
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
        <Form.Group onChange={q2w_3value} as={Row}>
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
        style={{ display: q2_w3 === "yes" ? "block" : "none" }}
      >
        * আপনার অবগতির জন্য জানানো যাচ্ছে যে কলটি রেকর্ড করা হচ্ছে এবং আপনার
        ব্যাক্তিগত তথ্য ভবিষ্যতে পর্যালোচনা এর কাজে ব্যবহার করা হতে পারে।
      </p>
      <div
        style={{ display: q2_w3 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৩. স্যার, আপনার দোকানের নাম কী<b> {consumer?.outlet_name} ?</b>
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুবা সঠিক দোকানের নাম
          লিপিবদ্ধ করে নিবে)
        </p>
        <Form.Group onChange={q3w_3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q3_w3 === "no" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          <b>দোকানের নাম : </b>
        </h6>
        <Form.Group onChange={retailerName_w3} as={Row}>
          <Form.Control
            className="w-25 ml-3"
            type="text"
            placeholder="Enter Retailer Name"
          />
        </Form.Group>
      </div>
      {/* Week 4 */}
      <div
        style={{
          display:
            consumer !== null && consumer?.week_name === "week_4"
              ? "block"
              : "none",
        }}
      >
        <h6>
          ১. আসসালামুআলাইকুম, আমি কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা
          বলছি?
        </h6>
        <p className="text-secondary">
          (উত্তর যাই হোক, পরবর্তী ২নং প্রশ্নে চলে যান)
        </p>
        <Form.Group onChange={q1w_4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1_w4 === "yes" || q1_w4 === "no" ? "block" : "none",
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
        <Form.Group onChange={q2w_4value} as={Row}>
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
        style={{ display: q2_w4 === "yes" ? "block" : "none" }}
      >
        * আপনার অবগতির জন্য জানানো যাচ্ছে যে কলটি রেকর্ড করা হচ্ছে এবং আপনার
        ব্যাক্তিগত তথ্য ভবিষ্যতে পর্যালোচনা এর কাজে ব্যবহার করা হতে পারে।
      </p>
      <div
        style={{ display: q2_w4 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৩. স্যার, আপনার দোকানের নাম কী<b> {consumer?.outlet_name} ?</b>
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুবা সঠিক দোকানের নাম
          লিপিবদ্ধ করে নিবে)
        </p>
        <Form.Group onChange={q3w_4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q3_w4 === "no" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          <b>দোকানের নাম : </b>
        </h6>
        <Form.Group onChange={retailerName_w4} as={Row}>
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
            (newRetailerName_w1 !== null || q3_w1 === "yes") &&
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
          display: q4dot1 === "yes" || q4dot1 === "no" ? "block" : "none",
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
            (newRetailerName_w3 !== null || q3_w3 === "yes") &&
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
            (newRetailerName_w4 !== null || q3_w4 === "yes") &&
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
            q2_w1 === "no" ||
            q2_w2 === "no" ||
            q2_w3 === "no" ||
            q2_w4 === "no" ||
            q2_w1 === "busy" ||
            q2_w2 === "busy" ||
            q2_w3 === "busy" ||
            q2_w4 === "busy" ||
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
