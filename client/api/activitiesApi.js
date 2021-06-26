import client from './client'

const getActivities = () => {
    return client.post("/getActivities");
};

const addParticipantToChallenge = (data) => {
    return client.post("/addParticipantToChallenge", data);
}

export default { getActivities, addParticipantToChallenge }
