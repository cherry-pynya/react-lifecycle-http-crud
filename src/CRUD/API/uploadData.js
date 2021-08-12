export default function uploadData(server, data) {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const params = new URLSearchParams();
      params.append('id', data.id);
      params.append('content', data.content);
      xhr.open('POST', `${server}/notes`);
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              const status = xhr.status;
              if (status === 0 || (status >= 200 && status < 400)) {
                  console.log(xhr.status);
              } else {
                console.log(xhr.status);
              };
          };
      };
      xhr.send(params);
  });
}