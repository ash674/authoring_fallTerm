import team from './modules/DataModule.js';

(() => 
{

    let myReq = new XMLHttpRequest;
    myReq.addEventListener("readystatechange", handleRequest);

    myReq.open('GET', '../DataSet.json');
    myReq.send();   
    function handleRequest() {
        if (myReq.readyState === XMLHttpRequest.DONE) {
            // check status here and proceed
            if (myReq.status === 200) {
                // 200 means done and dusted, ready to go with the dataset!
                debugger
                handleDataSet(myReq.responseText);

            } else {
                // probably got some kind of error code, so handle that 
                // a 404, 500 etc... can render appropriate error messages here
                console.error(`${myReq.status} : something done broke, son`);
            }
        } else {
            // request isn't ready yet, keep waiting...
            console.log(`Request state: ${myReq.readyState}. Still processing...`);
        }

    }


    let userSection = document.querySelector(".user-section"),
    userTemplate = document.querySelector("#profs-template").content; 

   
    function handleDataSet(data){
     

        for(let user in data){
     
            let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector(".user").children;
     
            currentUserText[1].textContent = data[user].name;
            currentUserText[2].textContent = data[user].nickname;
            currentUserText[3].textContent = data[user].role;

            userSection.appendChild(currentUser);
        }
    }

    handleDataSet(team);    

})();