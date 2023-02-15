const arrHtml = `<div class="container"><h1>Array Visualizer</h1>
  <p class="sub-title">Press Enter in any text field to submit</p>
  <p class="sub-title">Make Random Array button will make 10 length array if field is empty</p>
  <p class="sub-title">Drag array elements over each other to swap</p>
  <br>
  <div>
    <label for="array-input">Put your comma separated array here:</label>
    <input type="text" name="array-input" id="array-input">
    <button type="submit" id="submit-arr">Make Array</button>
    <br>
    <label for="arr-maker" name="arr-maker">Make random array of length:</label>
    <input type="text" id="submit-len" name="submit-len">
    <button type="submit" id="make-random">Make Random Array</button>
    <br>
    <label for="concat-maker" name="concat-maker">Concat array to existing array:</label>
    <input type="text" id="concat-maker" name="concat-maker">
    <button class="button-small" type="submit" id="concat-arr">Concat</button>
    <br>
    <label for="push-input" name="push-input">Value to push:</label>
    <input type="text" id="push-input" name="push-input">
    <button class="button-small" type="submit" id="push-arr">Push</button>
    <br>
    <label for="unshift-input" name="unshift-input">Value to unshift:</label>
    <input type="text" id="unshift-input" name="unshift-input">
    <button class="button-small" type="submit" id="unshift-arr">Unshift</button>
    <br>
    <button class="button-small" type="submit" id="pop-arr">Pop</button>
    <button class="button-small" type="submit" id="shift-arr">Shift</button>
    <button class="button-med" type="submit" id="make-empty">Clear All</button>
    <div id="array-container"></div>
  </div>
  <h2 class="arr-title"><strong>Array</strong></h2>
  <ul id="array-list"></ul>
  </div>
  <script type="module" src="src/utils/arr-script.ts"></script>`;
export { arrHtml };


