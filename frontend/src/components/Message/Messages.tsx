import Message from "./Message";

export default function Messages() {
  return (
    <div className="overflow-auto px-4 flex-1">
      <Message />
      <Message />
      <Message />
    </div>
  )
}
