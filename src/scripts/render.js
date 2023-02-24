export async function render(user){
    const headerUser = document.querySelector('.headerUser')
        const cardUser = createUser(user)

        headerUser.appendChild(cardUser);
}

function createUser(element){
    const DivUser = document.createElement('div')
    const liUser = document.createElement('li')
    const imgUser = document.createElement('img')
    const liName = document.createElement('li')


    DivUser.classList.add('userDetails')

    imgUser.classList.add('imgUser')
    imgUser.src = element.avatar_url
    imgUser.alt = element.name

    liName.classList.add('username')
    liName.innerText = element.name



    liUser.appendChild(imgUser)

    DivUser.append(liUser,liName)

    return DivUser
}
