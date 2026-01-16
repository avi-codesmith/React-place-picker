import { useEffect, useState } from "react";

import Progress from "./ProgressBar";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [num, setNum] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setNum((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          onConfirm();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [onConfirm]);

  return (
    <div>
      <Progress />
      <div id="delete-confirmation">
        <h2>Are you sure?</h2>
        <p>Do you really want to remove this place?</p>
        <div id="confirmation-actions">
          <button onClick={onCancel} className="button-text">
            No
          </button>
          <button onClick={onConfirm} className="button">
            Yes{num > 0 ? ` ( after  ${num} second${num > 1 ? "s" : ""} )` : ""}
          </button>
        </div>
      </div>
    </div>
  );
}
