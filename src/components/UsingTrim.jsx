import { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <form>
      <label>Mesajınız</label>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />

      {/* {message.length >= 3 ? <p>mesajınız var</p> : <p>Geçersiz Mesaj</p>} */}

      {message.trim().length >= 3 ? (
        <p>mesajınız var</p>
      ) : message.trim().length === 0 ? (
        <p>Geçersiz Mesaj</p>
      ) : (
        <p>Geçersiz Mesaj</p>
      )}
    </form>
  );
}
