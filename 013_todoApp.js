
// ==== TODOAPP -SJ ====
//find()는 배열에서 조건을 만족하는 “첫 번째 요소”를 찾아 반환하는 메서드
//forEach 배열을 하나씩 돌면서 코드 실행해라
class TodoApp {
    todos = [];
    nextId = 1; 

    // 할 일 추가

    addTodo(text){
        const todo ={
         id: this.nextId++,
         text,
         completed: false,
        };
       this.todos.push(todo);
    }    

    //할 일 목록 출력
    //삼항여산자 : 조건 ? 참일 때 : 거짓일 때
    //todo.completed === true → ✔ 출력
   // todo.completed === false → 공백 출력
    listTodos() {
        console.log('📌 Todo List');
        this.todos.forEach((todo) => {
             console.log(`[${todo.completed ? '✔' : ' '}]
                    (${todo.id}) ${todo.text}`);
           });
        }
    // 완료 처리
    //find()는 배열에서 조건을 만족하는 “첫 번째 요소”를 찾아 반환하는 메서드
    toggleTodo(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
        todo.completed = !todo.completed;
         }     
    }
     //삭제
     //filter는 조건을 만족하는 것만 남기는 함수
     removeTodo(id) {
        this.todos = this.todos.filter((t) => t.id !== id);
    }
    // 3. 실행 예제

}
   const app = new TodoApp();
   app.addTodo('TypeScript 공부하기');
   app.addTodo('운동하기');
   app.listTodos();
   app.toggleTodo(1);
   app.listTodos();
   app.removeTodo(2);
   app.listTodos();