import { VscLoading } from "react-icons/vsc";

export function ClickButton({
  primaryText,
  waiting = false,
  waitingText = "Processing...",
  styles = " flex gap-1",
  disabled = false,
  type = "button",
  handleClickEvent,
  children,
  title = "",
}) {
  return (
    <button
      disabled={waiting || disabled}
      className={`flex items-center justify-center gap-2 w-fit min-w-max p-2 whitespace-nowrap border bg-green-500 hover:bg-green-600 active:bg-green-400 transition-all ${styles} ${
        waiting && "cursor-wait"
      }`}
      type={type}
      onClick={handleClickEvent}
      title={title}
    >
      {children}
      {waiting ? (
        <span className={`flex items-center justify-center overflow-hidden`}>
          <VscLoading className={` spin1 `} />
          {waitingText}
        </span>
      ) : (
        <span>{primaryText}</span>
      )}
    </button>
  );
}
