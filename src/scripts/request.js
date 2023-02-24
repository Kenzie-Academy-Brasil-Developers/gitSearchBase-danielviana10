export async function getUserByName(username){
    const user = await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(res => {

        if(res.id){
            localStorage.setItem('serachUser', JSON.stringify(res))
            window.location.replace('./src/pages/profile.html')
        }
        else{
            window.location.replace('./src/pages/error.html')
        }
    })
    return user
}

