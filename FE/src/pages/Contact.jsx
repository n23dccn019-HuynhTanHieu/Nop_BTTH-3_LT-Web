import "../App.css";

function Contact() {
  return (
    <div className="container">
      <h2 className="section-title">Liên hệ</h2>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p>
          Hãy liên hệ khi bạn gặp bất cứ vấn đề nào liên quan đến công ty hoặc dịch vụ của chúng tôi.
          <br />
          Chúng tôi sẽ cố gắng phản hồi trong thời gian sớm nhất.
        </p>
      </div>

      <div className="contact-info" style={{ textAlign: "center", borderTop: "1px solid #ddd", paddingTop: "20px" }}>
        <h3>CÔNG TY ABC</h3>
        <p><strong>Địa chỉ:</strong> TP.HCM</p>
        <p><strong>Email:</strong> ABC@gmail.com</p>
        <p><strong>Hotline:</strong> 0123456789</p>
      </div>
    </div>
  );
}

export default Contact;