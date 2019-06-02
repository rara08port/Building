var app = new Vue({
  el: '#app',
  data: {
    addText: '',
    todos: [],
    uniqueID:0,
  },
  methods: {
    addToDo() {
      if (this.addText) {
        this.todos.push({
          'text': this.addText,
          'id': ++this.uniqueID,
          'isDone':true,
        });
        
      } 
      this.addText = '';
    },
    deleteToDo(index) {
      this.todos.splice(index,1)
    },
    editToDo(id) {
      var newText = window.prompt('以下の内容に更新します.');
      if (newText === '') {
        alert('入力欄が空欄です。');
      } else {
        this.todos[id].text = newText;
      }
      
    },
    
    changeToDo(id) {
      if (this.todos[id].isDone === true) {
        this.todos[id].isDone = false;
      }
      else {
        this.todos[id].isDone = true;
      }
    }
    
  }
})
