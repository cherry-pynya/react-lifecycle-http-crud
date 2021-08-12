export default function deleteNote(server, id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `${server}/notes/${id}`);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          console.log(xhr.status);
        } else {
          console.log(xhr.status);
        }
      }
    };
    xhr.send();
  });
}
