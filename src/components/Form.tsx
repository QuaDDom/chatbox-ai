import { useRef } from "react";
import { MdSend } from "react-icons/md";

export default function Form() {
  const formRef = useRef(null);

  return (
    <form ref={formRef}>
      <textarea
        name="prompt"
        rows={1}
        cols={1}
        placeholder="Ask GPT..."
      ></textarea>
      <button type="submit">
        {" "}
        <MdSend />{" "}
      </button>
    </form>
  );
}
