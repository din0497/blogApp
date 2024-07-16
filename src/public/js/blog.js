console.log("Hello");

const Editor = toastui.Editor;
const editor = new Editor({
  el: document.querySelector("#editor"),
  height: "500px",
  initialEditType: "markdown",
  previewStyle: "vertical",
});

// Save content to the backend
async function saveContent() {
  const content = editor.getMarkdown();
  try {
    const response = await axios.post("/create-blog", {
      content: content,
    });
    alert("created!")
  } catch (err) {
    console.log(err);
  }
}

// Add an event listener for saving content
document.querySelector("#save-button").addEventListener("click", saveContent);
