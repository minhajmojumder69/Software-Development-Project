
// const target = document.getElementById('title');
// target.style.color = 'red';

// const allbox = document.getElementsByClassName('box');

// for (let index = 0; index < allbox.length; index++) {
//     const element = allbox[index];
//     if(element.innerText == 'box-5'){
//         element.style.backgroundColor = 'red';
//     }
// } 

document.getElementById('add-btn').addEventListener('click',(event)=>{
    const inputValue = document.getElementById("searchbox").value;
    // console.log(inputValue);

    const comment = document.getElementById('comment_container');

    const p = document.createElement('p');
    p.classList.add('child');
    p.innerText = inputValue;

    comment.appendChild(p);
    document.getElementById("searchbox").value="";

    const allcomment = document.getElementsByClassName('child');

    for(const element of allcomment){
        element.addEventListener('click',(event)=>{
            event.target.parentNode.removeChild(element);
        });
    }

});

// const addbtn = (event)=>{
//     console.log('Hello Boxx');
// }

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        displayData(data)
    })
    .catch((err)=>{
        console.log(err)
    })

const displayData = (userdata)=>{
    const container = document.getElementById('userdata-container');

    userdata.forEach(element => {
        const div= document.createElement('div');
        div.classList.add('user');
        div.innerHTML=`
        <h4>title</h4>
        <p>Description</p>
        <button>Details</button>
        `;

        container.appendChild(div);
    });
}