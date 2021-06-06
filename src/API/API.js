const ENDPOINT = "https://crudcrud.com/api/e48c07c806594b8fb60fbaad3e0ad3e8/testing";

//this component handles all of the API network calls

class API {

    create = async (thing) => {
        console.log("create api thing prop contents", thing);
        try {
            const resp = await fetch(`${ENDPOINT}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(thing)
                
            });
            return await resp.json();
        } catch(e){
            console.log("create error", e)
        }
    }

    get = async () => {
        try {
            // console.log("api get call")
            const resp = await fetch(ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("Fetch broke", e)
        }
    }

    delete = async (id) => {
        console.log(id)
        console.log(`${ENDPOINT}/${id}`)

        await fetch(`${ENDPOINT}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(id)
                });               
       
    }

    update = async (thing) => { 
        // console.log("update api call thing:", thing)
        // console.log("update api call thing.props.props.props._id:", thing.props.props.props._id)
        // console.log("update api call thing.props.props.props", thing.props.props.props)
            await fetch (`${ENDPOINT}/${thing.props.props.props._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(thing)            
        });
        // return await resp.json();
    }

}

export const newAPI = new API();