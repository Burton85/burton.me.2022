
const { Client } = require('@notionhq/client');
const dataGetter = {
    getCover: async (url) => {
        let value = await fetch(url).then((response) => {
            return response.data.cover.scaled;
        });
        return value;
    },
    getData: async (url) => {
        let value = await fetch(url).then(function (response) {
            return response.json();
        });
        return value;
    },
    getNotionData: async() => {
        // var data = {username: 'example'};
        // let value = await fetch(url, {
        //     method: 'GET', // or 'PUT'
        //     // body: JSON.stringify(), // data can be `string` or {object}!
        //     headers: new Headers({
        //         'Authorization': process.env.VUE_APP_KEY,
        //         'Content-Type': 'application/json',
        //         'Notion-Version' : '2022-06-28'
        //     })
        // }).then(function (response) {
        //     console.log(response)
        //     return response.json();
        // })
        // .catch(error => console.error('Error:', error))
        
        // return value;
        const notion = new Client({ auth: process.env.VUE_APP_KEY});
        (async () => {
            const databaseId = '3c492de9d7f2416dafae30562a157200';
            const response = await notion.databases.retrieve({ database_id: databaseId });
            console.log(response);
        })();
    }
};
export default dataGetter;
