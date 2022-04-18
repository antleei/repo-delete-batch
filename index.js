const axios = require('axios');
const fs = require('fs');

const token = ''
const username = ''
 
fs.readFile('./repo.txt', 'utf-8', (err, data) => {
    if(err){
		console.error(err);
	} else{
        data.split('\n').forEach(repo => {
            console.log(repo)
            deleteRequest(repo)
        })
	}
})	


function deleteRequest(repo) { 
    axios({
        method: 'delete',
        url: `https://api.github.com/repos/${username}/${repo}`,
        headers: {
            accept: 'application/vnd.github.v3+json',
            Authorization: 'token ' + token
        }
    }).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
}

