/*
AJAX call to API
 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let li = document.createElement("li");
        li.innerText = document.getElementById("moviesList").innerHTML = xhttp.responseText;
    }
};

xhttp.open('GET', 'https://swapi.dev/api/films', true);
xhttp.send();




/*
const sendRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            }
            resolve(xhr.response);
        };
        xhr.send();
    });
    return promise;
};
const getData = async () => {
    try {
        const res = await sendRequest(
            'GET',
            'https://swapi.dev/api/films'
        );
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

getData();
*/

/*
var list = getData().forEach((items) => {
    items.forEach((movie) => {
        movie.push(movie.name);
        let li = document.createElement("li");
        li.innerText = movie.name;
        list.appendChild(li);
    })
    console.log(items)
}).catch((err) => {
    console.log('Error')
});
*/