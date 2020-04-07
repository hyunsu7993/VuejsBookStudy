// 변이를 일으킬 때 문자열 정보를 전달하기 때문에 미리 상수로 정의해두고 사용하면 
// 오타를 줄일 수 있으며 Constant.js파일만 살펴보면 이 애플리케이션에서 
// 어떤 변이나 액션이 일어나는지를 한눈에 랑 수 있기 때문에 사용을 권장합니다.
export default {
    ADD_TODO: "addTodo",
    DONE_TOGGLE: "doneToggle",
    DELETE_TODO: "deleteTodo"
}