// Tangkap element
const getFormTodo = document.querySelector("#form_todo");
const getNameTodo = document.querySelector("#add_todo");
const getDeadlineTodo = document.querySelector("#deadline_todo");
const getKeteranganTodo = document.querySelector("#keterangan_todo");
const getRenderTodo = document.querySelector("#renderAllTodo");
// Form

const renderData = (todoTitle, dateTodo, detailTodo, fileTodo) => {
  const result = `
  <div class="wrapper">
  <div class="display_todo_checkbox">
      <input type="checkbox">
  </div>
  <div class="display_todo_content">
      <div class="display_todo_content_title">
          <h2>${todoTitle.value}</h2>
      </div>
      <div class="display_todo_content_content">
          <span>${dateTodo.value}</span>
          <p class="mt-1">${detailTodo.value}</p>
      </div>
  </div>
</div>
  `;
  getRenderTodo.insertAdjacentHTML("afterbegin", result);
};

getFormTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  renderData(getNameTodo, getDeadlineTodo, getKeteranganTodo);
});
