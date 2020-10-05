const body = document.querySelector("body");
const h3 = document.createElement("h3");
body.appendChild(h3);
class Comment {
  constructor(comment, userName) {
    this.comment = comment;
    this.userName = userName;
    this.timestamp = new Date();
  }
  getComment() {
    return this.comment;
  }
  editComment(newComment) {
    this.comment = newComment;
  }
  likeComment() {
    console.log(this);
  }
  render() {
    h3.innerHTML = this.comment;
  }
}
/*const comment = new Comment("this is my video", "kamal");
comment.likeComment();
comment.editComment("this video actually good");
console.log(comment.getComment());*/

const submit = document.querySelector("button");
const textarea = document.querySelector("textarea");
const comment = new Comment("", "Kamal");
submit.addEventListener("click", () => {
  const content = textarea.value;
  comment.editComment(content);
  comment.render();
});
