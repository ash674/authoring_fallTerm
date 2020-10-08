import team from './modules/DataModule.js';

(() => 
{
    let userSection = document.querySelector(".user-section"),
    userTemplate = document.querySelector("#profs-template").content; 

    debugger
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