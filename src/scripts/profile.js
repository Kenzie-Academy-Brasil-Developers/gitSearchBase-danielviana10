import { render } from "./render.js"

function showProfile(){
    const usersFiles = JSON.parse(localStorage.getItem('serachUser'))

    render(usersFiles)

}
showProfile()