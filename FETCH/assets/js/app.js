const resultParent = document.getElementById('result-parent')
const spinner = document.getElementById('spinner')
const table = document.getElementById('table')

table.style.display = "none"

setTimeout(() => {
    spinner.style.display = "none"
    table.style.display = "table"
}, 3000)
const fetchUsers = async () => {
    try{
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!result.ok){
            console.log("Impossible d'acceder au serveur");
            return null;
        }
        return await result.json()

    }catch(err){
        throw new Error('Impossible d\'effectuer la requete')
    }
}

const getUsers = async () => {
    try{
       const data = await fetchUsers()
       for (let result of data) {
            resultParent.innerHTML += `
                <tr>
                    <td> ${result.id}</td>
                    <td> ${result.name}</td>
                    <td> ${result.email}</td>
                    <td> ${result.address.city}</td>
                </tr>
            `
       }
    }catch(err){
        console.log("Aucune utilisateur n'a ete recuperer");
        
    }
}

getUsers()