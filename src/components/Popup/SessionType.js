import React, { useEffect, useState } from "react";
import Btn from "../Button/Btn";
import Schedule from "../Popup/Schedule";

export default function SessionType({ onClose, selectedTarotReaderId, tarotReaderName}) {
  const [sessionTypes, setSessionTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTimeSelection, setShowTimeSelection] = useState(false);
  const [selectedSessionType, setSelectedSessionType] = useState(null);

  useEffect(() => {
    const fetchSessionTypes = async () => {
      try {
        const response = await fetch(
          `https://localhost:7218/api/TarotReader/${selectedTarotReaderId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSessionTypes(data.sessionTypes);
        console.log("data", data.sessionTypes);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionTypes();
  }, [selectedTarotReaderId]);
console.log("a", tarotReaderName);

  const handleTimeSelectionOpen = (sessionType) => {
    setSelectedSessionType({ ...sessionType, tarotReaderId: selectedTarotReaderId , tarotReaderName: tarotReaderName});
    setShowTimeSelection(true);
  };

  const handleTimeSelectionClose = () => {
    setShowTimeSelection(false);
    setSelectedSessionType(null);
  };

  return (
    <div
      className="modal show"
      id="sessionType"
      tabIndex="-1"
      aria-labelledby="sessionTypeLabel"
      aria-hidden="true"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        overflowY: "auto"
      }}
    >
      <div className="modal-dialog" style={{ maxWidth: "600px", width: "90%", maxHeight: "80%" }}>
        <div
          className="modal-content"
          style={{
            borderRadius: "30px",
            boxShadow: "rgb(0, 0, 0) 0px 3px 0px 0px",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <div className="modal-header border-bottom-0">
            <button
              style={{ marginRight: "5px" }}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="modal-contact">
              <h2>Chọn buổi đọc</h2>
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              {!loading && !error && sessionTypes && sessionTypes.length > 0 && (
                <div>
                  {sessionTypes.map((sessionType) => (
                    <div
                      key={sessionType.sessionTypeId}
                      className="form-div-sections mt-5 d-inline-block w-100 px-5"
                      style={{
                        display: "flex",
                        backgroundColor: "white",
                        borderRadius: "21px",
                        border: "1px solid black",
                        marginBottom: "16px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "28px 32px",
                      }}
                    >
                      <h4 style={{ textAlign: "start" }}>{sessionType.name}</h4>
                      <p style={{ textAlign: "start" }}>
                        <strong>
                          <i
                            className="fas fa-clock"
                            style={{
                              color: "#273cb9",
                              fontSize: "25px",
                              marginTop: "10px",
                            }}
                          ></i>
                        </strong>{" "}
                        {sessionType.duration} minutes
                      </p>
                      <p style={{ textAlign: "start" }}>
                        <strong>Mô tả:</strong> {sessionType.description}
                      </p>
                      <p style={{ textAlign: "start" }}>
                        <strong>Giá:</strong> {sessionType.price}.000đ
                      </p>
                      <Btn style={{ maxWidth: "200px" }} onClick={() => handleTimeSelectionOpen(sessionType)}>
                        Lựa chọn thời gian
                      </Btn>
                    </div>
                  ))}
                </div>
              )}
              {!loading && !error && sessionTypes && sessionTypes.length === 0 && (
                <p>No session types available for this tarot reader.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showTimeSelection && <Schedule onClose={handleTimeSelectionClose} sessionType={selectedSessionType} tarotReaderName={tarotReaderName}/>}

    </div>
  );
}
