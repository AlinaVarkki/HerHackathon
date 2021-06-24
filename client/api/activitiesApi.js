import client from './client'

const getActivities = () => {
    return client.post("/getActivities");
};

export default { getActivities }
