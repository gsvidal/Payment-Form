const replyMsg = document.querySelector(".reply");
const inputReply = document.querySelector(".input-reply");

inputReply.addEventListener("input", showReply);

function showReply(event) {
  replyMsg.innerHTML = `Event-target-value: ${event.target.value}`;
  console.log(event.target.value)
}