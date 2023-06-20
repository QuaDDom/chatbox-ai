import { useRef, useState } from "react";
import Form from "../components/Form";

export default function Home() {
  const [textState, setTextState] = useState("");
  const chatContainerRef = useRef(null);

  function typeText(element: any, text: string) {
    let index = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        setTextState(text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }

  function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  }

  return (
    <div id="app">
      <div id="chat_container" ref={chatContainerRef}></div>
      <Form />
    </div>
  );
}
