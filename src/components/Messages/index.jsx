import { useEffect } from "react";
import "./index.css";

const Message = ({ senderUser, messages }) => {
  const localUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log("entrando a message");
  }, []);

  const c__message__myself__user = {
    padding: "12px",
    width: "300px",
    height: "60px",
    overflow: "auto",
    backgroundColor: "rgb(67, 164, 26)",
    borderRadius: "8px",
    marginTop: "-10px",
    fontWeight: "bold",
   }
  
   const c__message__destiny__user= {
    padding: "12px",
    width: "300px",
    height: "60px",
    overflow: "auto",
    backgroundColor: "rgb(218, 231, 213)",
    borderRadius: "8px",
    marginTop: "-10px",
    fontWeight: "bold",
   }

  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className="message__content__text">
          <div className="message__content__image">
            <img
              width={45}
              src={
                senderUser.name === message.User.name
                  ? localUser.profile_url
                  : senderUser.profile_url
              }
            />
          </div>
          <div className="message__content__message">
            <p className="c__name">
              {senderUser.name === message.User.name
                ? localUser.name
                : senderUser.name}
            </p>
            <p style={senderUser.name === message.User.name
                ? c__message__myself__user
                : c__message__destiny__user}>{message.message}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Message;
