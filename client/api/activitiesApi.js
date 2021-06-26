import client from './client'

const getActivities = () => {
    return client.post("/getActivities");
};

const addParticipantToChallenge = (data) => {
    return client.post("/addParticipantToChallenge", data);
}

const removeParticipantFromChallenge = (data) => {
    return client.post("/removeParticipantFromChallenge", data);
}

export default { getActivities, addParticipantToChallenge, removeParticipantFromChallenge }
