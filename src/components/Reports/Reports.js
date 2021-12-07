import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Alert, Col } from "react-bootstrap";

const Reports = () => {
  const [report, setReport] = useState([]);
  const [dates, setDates] = useState([]);
  const [downloaded, setDownloaded] = useState([]);
  useEffect(() => {
    fetch("http://192.168.10.14:6011/reports")
      .then((res) => res.json())
      .then((data) => {
        setReport(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://192.168.10.14:6011/reportDates")
      .then((res) => res.json())
      .then((data) => setDates(data));
  }, []);

  function handlePrepare(pdate) {
    console.log(pdate);
    fetch("http://192.168.10.14:6011/prepareByDate?date=" + pdate)
      .then((res) => res.json())
      .then((data) => setDownloaded(data));
  }

  function setShow() {
    setDownloaded([]);
  }

  let headers = [
    { label: "Id", key: "Id" },
    { label: "diid", key: "diid" },
    { label: "week_name", key: "week_name" },
    { label: "data_date", key: "data_date" },
    { label: "Region", key: "Region" },
    { label: "Area", key: "Area" },
    { label: "Territory", key: "Territory" },
    { label: "Sales Point", key: "Sales Point" },
    { label: "outlet_id", key: "outlet_id" },
    { label: "outlet_name", key: "outlet_name" },
    { label: "Retailer_Name", key: "Retailer_Name" },
    { label: "Consumer_No", key: "Consumer_No" },
    { label: "outlet_address", key: "outlet_address" },
    { label: "TMS name", key: "TMS name" },
    { label: "TMS Email", key: "TMS Email" },
    { label: "TMS number", key: "TMS number" },
    { label: "for_d", key: "for_d" },
    { label: "agentID", key: "agentID" },
    { label: "qcBy", key: "qcChecked" },
    { label: "qcDate", key: "qcDate" },
    { label: "qcTime", key: "qcTime" },
    { label: "rating", key: "rating" },
    { label: "callDate", key: "callDate" },
    { label: "callTime", key: "callTime" },
    { label: "answer1_w1", key: "answer1_w1" },
    { label: "answer2_w1", key: "answer2_w1" },
    { label: "answer3_w1", key: "answer3_w1" },
    { label: "answer4", key: "answer4" },
    { label: "answer4dot1", key: "answer4dot1" },
    { label: "answer5", key: "answer5" },
    { label: "answer5dot1", key: "answer5dot1" },
    { label: "answer1_w3", key: "answer1_w3" },
    { label: "answer2_w3", key: "answer2_w3" },
    { label: "answer3_w3", key: "answer3_w3" },
    { label: "answer6", key: "answer6" },
    { label: "answer6dot1", key: "answer6dot1" },
    { label: "answer1_w4", key: "answer1_w4" },
    { label: "answer2_w4", key: "answer2_w4" },
    { label: "answer3_w4", key: "answer3_w4" },
    { label: "answer7", key: "answer7" },
    { label: "answer7dot1", key: "answer7dot1" },
  ];
  return (
    <div className="mt-5">
      {downloaded.length > 0 && (
        <Alert onClose={() => setShow()} dismissible variant="success">
          Leads Prepared for Download
        </Alert>
      )}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Prepare</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((date, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{date?.date}</td>
                <td>
                  <button
                    onClick={() => handlePrepare(date?.date)}
                    className="btn btn-danger"
                  >
                    Prepare
                  </button>
                </td>
                <td>
                  <button className="btn btn-info">
                    <CSVLink
                      headers={headers}
                      title="Export data to CSV"
                      filename={`bandhan_retailer_${date?.date}.csv`}
                      data={downloaded}
                    >
                      `Download_${date?.date}`
                    </CSVLink>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <h4 className="text-secondary">Download Full Report Report</h4>
      </div>
      <div style={{ display: report.length > 0 ? "block" : "none" }}>
        <button className="btn btn-danger mt-3">
          <CSVLink
            headers={headers}
            title="Export data to CSV"
            filename={"bandhan_retailer.csv"}
            data={report}
          >
            Download
          </CSVLink>
        </button>
      </div>
    </div>
  );
};

export default Reports;
