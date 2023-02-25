import { getUserByName } from "./request.js"

export function searchUser(){
    const input = document.querySelector('.inputUser')
    const button = document.querySelector('.buttonUser')

    button.addEventListener('click', async (event) => {
        event.preventDefault()
        const users = await getUserByName(input.value)
    })
}searchUser()