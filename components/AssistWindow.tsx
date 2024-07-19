{/* TODO zmienne env zabezpieczyć */}

import React, { useState, ChangeEvent } from "react";

const ContainerComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleAnswerChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
         'https://api.airtable.com/v0/applaLFSEX2TtW7kD/tblPQ9bUmLfr3I5kk',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer keygn8nzTUU7vAHaR',
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  name,
                  email,
                  answer,
                },
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add new record to Airtable');
      }

      console.log('Data sent successfully');
      // Reset the form values
      setName("");
      setEmail("");
      setAnswer("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", padding: "16px" }}>
      <div style={{ backgroundColor: "#1F2937", border: "2px solid #08fc9c", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
        <div>
          <input
            type="text"
            placeholder="Nazwa użytkownika"
            value={name}
            onChange={handleNameChange}
            style={{
              backgroundColor: "#1F2937",
              border: "1px solid #08fc9c",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "8px",
              width: "100%",
              marginBottom: "8px",
              color: "#fff",
            }}
          />
          <input
            type="email"
            placeholder="Mail"
            value={email}
            onChange={handleEmailChange}
            style={{
              backgroundColor: "#1F2937",
              border: "1px solid #08fc9c",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "8px",
              width: "100%",
              marginBottom: "8px",
              color: "#fff",
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#08fc9c",
              border: "2px solid #1F2937",
              padding: "8px",
              borderRadius: "8px",
              width: "100%",
              color: "#1F2937",
            }}
          >
            Wyślij
          </button>
        </div>
      </div>
      <div style={{ backgroundColor: "#1F2937", border: "2px solid #08fc9c", borderRadius: "8px", padding: "16px" }}>
        <div>
          <textarea
            rows={4}
            placeholder="Powiedz nam kim jesteś? Czym się zajmujesz? Czego potrzebujesz?"
            value={answer}
            onChange={handleAnswerChange}
            style={{
              backgroundColor: "#1F2937",
              border: "1px solid #08fc9c",
              padding: "8px",
              fontSize: "14px",
              width: "100%",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerComponent;
