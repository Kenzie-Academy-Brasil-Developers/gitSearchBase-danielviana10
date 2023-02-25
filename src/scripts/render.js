function createUser(){
    const userLocal = JSON.parse(localStorage.getItem('searchUser'))
    const ulProject = document.querySelector('.projects')
    const headerUser = document.querySelector('.headerUser')

    const DivUser = document.createElement('div')
    const liUser = document.createElement('li')
    const imgUser = document.createElement('img')
    const liName = document.createElement('li')


    DivUser.classList.add('userDetails')

    imgUser.classList.add('imgUser')
    imgUser.src = userLocal.avatar_url
    imgUser.alt = userLocal.name

    liName.classList.add('username')
    liName.innerText = userLocal.name

    liUser.appendChild(imgUser)
    DivUser.append(liUser,liName)
    headerUser.appendChild(DivUser)

    fetch(userLocal.repos_url)
    .then(response => response.json())
    .then(res => {
        res.forEach(element => {
            const liBox = document.createElement('li')
            const titleBox = document.createElement('h2')
            const textBox = document.createElement('p')
            const buttonBox = document.createElement('a')

            liBox.classList.add('box')

            titleBox.innerText = element.name
            titleBox.classList.add('titleBox')

            textBox.innerText = element.description
            textBox.classList.add('textBox')

            buttonBox.href = element.html_url
            buttonBox.innerText = "Repositório"
            buttonBox.target = "_blank"
            buttonBox.classList.add('buttonBox')

            liBox.append(titleBox,textBox,buttonBox)
            ulProject.append(liBox)
        });
    })
}
createUser()