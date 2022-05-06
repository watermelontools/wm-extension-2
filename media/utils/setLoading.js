function setLoading(errorTimeout) {
  $("#ghHolder").replaceWith(`
    <div id="ghHolder">
      <p>Loading...</p>
    </div>
    `);
  errorTimeout = setTimeout(setError, 4000);
}
function setError() {
  $("#ghHolder").replaceWith(`
    <div id="ghHolder">
      <p>We might have run into an error, our team is on it.</p>
      <p>Try running a new Watermelon query, please.</p>
    </div>
    `);
  $("#ghHolder").append(
    "<button class='run-watermelon'>Run Watermelon</button><br/>"
  );
  $(".run-watermelon").on("click", (event) => {
    sendMessage({ command: "run" });
  });
  $("#ghHolder").append(
    `<button class='create-docs' >Create repo docs</button>`
  );
  $(".create-docs").on("click", (event) => {
    sendMessage({ command: "create-docs" });
  });

  $("#ghHolder").append(
    "<p>Alternatively, you can <a href='https://github.com/watermelontools/wm-extension#commands'>run with our watermelon.start command</a></p>"
  );
  $("#ghHolder").append(
    "<p>Select a piece of code to start. Then run the Watermelon VS Code Command by pressing <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> (or <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> in Mac) and type > <code>start watermelon</code></p>"
  );
}

export default setLoading;
