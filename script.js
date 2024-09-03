const inputBox = document.getElementById('inputBox');
const button = document.getElementById('btn');
const container = document.getElementsByClassName('list')[0];
let taskCount = 0; // Initialize taskCount as a number

const addTask = () => {
    //if user clicks on button without typing anything, this code runs
    if (inputBox.value === '') {
        let message = document.createElement('span');
        message.innerHTML = 'Please write something <br>';
        container.appendChild(message);
    } else {
        //to remove "please write something" span tag
        let msg = document.querySelectorAll('span');
        msg.forEach(element => {
            element.remove();
        });

        taskCount++;
        let workList = document.createElement('p');
        workList.innerHTML = `${taskCount}. ${inputBox.value} <i class="fa-regular fa-circle-xmark close"></i>`;
        container.appendChild(workList);
        //to create a line 
        // let hr = document.createElement('hr')
        // workList.after(hr)

        inputBox.value = '';
    }
};

button.addEventListener('click', (e) => {
    addTask();
    saveData();
});
inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
        saveData();
    }
});
// Adding event listener to close buttons
let list = document.getElementsByClassName('list')[0]
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
        let taskParagraph = e.target.parentElement; // Get the parent <p> element
        let hrElement = taskParagraph.nextElementSibling; // Get the <hr> element following the <p>

        taskParagraph.remove(); // Remove the task <p> element
        if (hrElement && hrElement.tagName === 'HR') {
            hrElement.remove(); // Remove the <hr> element
        }

        saveData(); // Save data after removing the task
    }
})


const saveData = () => {
    localStorage.setItem('data', container.innerHTML)
}
const showData = () => {
    container.innerHTML = localStorage.getItem('data')
}
showData()

