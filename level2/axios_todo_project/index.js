const form = document.forms["axiosForm"];

//create - test/debug
const submitBtn = document.getElementById("submitButton");
form.addEventListener('submit',function(event) {
    event.preventDefault();
    const newJSON = toDoInfo();
    // console.log(newJSON);
    let newItem = toDoInfo();
    axios.post(`https://api.vschool.io/brendonstueben/todo`, newJSON)
        .then(response => {

            newItem._id = response.data._id
            // console.log(newItem._id)
            itemBoxCreator(newItem);

            console.log(response.data)
            form.reset();
        })
        .catch(error => console.log(error))
    })



//read - test/debug
axios.get(`https://api.vschool.io/brendonstueben/todo`)
    .then(response => {
        for(let i = 0; i < response.data.length; i++){ //forEach later...
            const gotObject = {
                _id: response.data[i]._id,
                title: response.data[i].title,
                price: response.data[i].price,
                description: response.data[i].description,
                imgUrl: response.data[i].imgUrl
            }
            itemBoxCreator(gotObject);
        }
    })
    .catch(error => console.log(error))



//update - test/debug
function editFunc(button, container){
    button.addEventListener('click',() => {
        const editId = container.getAttribute('data-id');
        
        // Save original values from the elements
        const oldTitle = container.querySelector('h2')?.textContent || "";
        const oldPrice = container.querySelector('h3')?.textContent.replace("$", "") || "";
        const oldDescription = container.querySelector('span')?.textContent || "";
        const oldImgUrl = container.querySelector('img')?.src || "";
        // Clear original content
        container.innerHTML = "";
        // Generates input fields in place of original content. Keeps original values saved above
        const titleInput = document.createElement('input');
        titleInput.value = oldTitle;
        const priceInput = document.createElement('input');
        priceInput.type = "number";
        priceInput.value = oldPrice;
        const descInput = document.createElement('input');
        descInput.value = oldDescription;
        const imgUrlInput = document.createElement('input');
        imgUrlInput.value = oldImgUrl;
        // save button
        const saveBtn = document.createElement('button');
        saveBtn.textContent = "Save";
        saveBtn.type = "button";
        // Append values to container
        container.appendChild(titleInput);
        container.appendChild(priceInput);
        container.appendChild(descInput);
        container.appendChild(imgUrlInput);
        container.appendChild(saveBtn);
        // Save button function
        saveBtn.addEventListener('click', () => {
            const updatedObj = {
                title: titleInput.value || oldTitle,
                price: priceInput.value || oldPrice,
                description: descInput.value || oldDescription,
                imgUrl: imgUrlInput.value || oldImgUrl
            };
    axios.put(`https://api.vschool.io/brendonstueben/todo/${editId}`, updatedObj)
        .then(response => {
            container.innerHTML = ""
            const newTitle = response.data.title
            const newPrice = response.data.price
            const newDescription = response.data.description
            const newImgUrl = response.data.imgUrl
                const objHeader = document.createElement('h2');
                objHeader.textContent = newTitle;
                const objPrice = document.createElement('h3');
                objPrice.textContent = "$"+newPrice;
                const objDesc = document.createElement('span');
                objDesc.textContent = newDescription;
                const objImgURL = document.createElement('img');
                objImgURL.src = newImgUrl;
                objImgURL.classList = "images";
                container.classList = "newPosts"
                    container.appendChild(objHeader);
                    container.appendChild(objPrice);
                    container.appendChild(objDesc);
                    container.appendChild(objImgURL);
            getButtons(container,newTitle)
            console.log(response.data)
        })
        .catch(error => console.log(error))
    })
})}



// delete - test/debug
function deleteFunc(button, container){
    button.addEventListener('click',() => {
        const deleteId = container.getAttribute('data-id');


    axios.delete(`https://api.vschool.io/brendonstueben/todo/${deleteId}`)
        .then(response => {
        container.remove();
        console.log(response.data);
        })
        .catch(error => console.log(error))
    });
}



function completedFunc(button, title){
        button.addEventListener('click', () => {
            if (title.style.textDecoration === 'line-through') {
                title.style.textDecoration = 'none';
            } else {
                title.style.textDecoration = 'line-through';
        }
    })
}



//test/debug
function toDoInfo(){
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const imgUrl = form.imgUrl.value;
    const toDoObject = {
        title: title,
        price: price,
        description: description,
        imgUrl: imgUrl
    }
    return toDoObject
}



//test/debug
function itemBoxCreator(object){
    //element creation
    const objHeader = document.createElement('h2');
    objHeader.textContent = object.title;
    const objPrice = document.createElement('h3');
    objPrice.textContent = "$"+object.price;
    const objDesc = document.createElement('span');
    objDesc.textContent = object.description;
    const objImgURL = document.createElement('img');
    objImgURL.src = object.imgUrl;
    objImgURL.classList = "images";
    //append elements to container
    const boxModel = document.createElement('div');
    boxModel.classList = "newPosts"
        boxModel.appendChild(objHeader);
        boxModel.appendChild(objPrice);
        boxModel.appendChild(objDesc);
        boxModel.appendChild(objImgURL);
    getButtons(boxModel, objHeader)
    //append container to list
    const list = document.getElementById("listBox");
    list.appendChild(boxModel);
    boxModel.setAttribute("data-id", object._id);
    return boxModel
}

function getButtons(model, header){
    const objDelete = document.createElement('button');
    objDelete.textContent = "Delete";
    objDelete.type = "button";
    objDelete.classList = "buttons";
    const objEdit = document.createElement('button');
    objEdit.textContent = "Edit";
    objEdit.type = "button";
    objEdit.classList = "buttons";
    const objCompleted = document.createElement('button');
    objCompleted.textContent = "Completed";
    objCompleted.type = "button";
    objCompleted.classList = "buttons";
    model.appendChild(objDelete);
    model.appendChild(objEdit);
    model.appendChild(objCompleted);
    deleteFunc(objDelete, model);
    editFunc(objEdit, model);
    completedFunc(objCompleted, header);
}

//IMPROVEMENTS
    //switch from button to radio input on completed
    //nest in this order: GET, (POST, EDIT, DELETE)
    //add classes/CSS to created elements in "itemBoxCreator"