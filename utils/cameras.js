//Array of cameras
const cameras = [];

const addCamera = ({id, name, room, config, streamObject}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingCamera = cameras.find(
        camera => camera.room === room && camera.name === name
    );

    if (!name || !room) return {error: 'Camera name and room are required.'};
    if (existingCamera) return {error: 'Camera name already exists.'};

    const camera = {id, name, room, config, streamObject};

    cameras.push(camera);

    return {camera};
};

const removeCamera = id => {
    const index = cameras.findIndex(camera => camera.id === id);

    if (index !== -1) return cameras.splice(index, 1)[0];
};

const getCamera = id => cameras.find(camera => camera.id === id);

const getCamerasInRoom = room => cameras.filter(camera => camera.room === room);

module.exports = {addCamera, removeCamera, getCamera, getCamerasInRoom};