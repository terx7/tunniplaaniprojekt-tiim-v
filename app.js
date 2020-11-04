let teachersDict = {}
let roomsDict = {}
let groupDict = {}
let weeksDict = {}



fetch('https://be.ta19heinsoo.itmajakas.ee/api/rooms').then(response => {
    return response.json()
}).then(data => {
    data.forEach(rooms => {
        roomsDict[rooms.roomId] = rooms.code
    })
})

fetch('https://be.ta19heinsoo.itmajakas.ee/api/teachers').then(response => {
    return response.json()
}).then(data => {
    data.forEach(teachers => {
        teachersDict[teachers.teacherId] = {
            'firstname': teachers.firstname,
            'lastname': teachers.lastname
        }
    });
})

fetch('https://be.ta19heinsoo.itmajakas.ee/api/groups').then(response => {
    return response.json()
}).then(data => {
    data.forEach(group => {
        groupDict[group.groupId] = group.groupCode
    });
})

fetch('https://be.ta19heinsoo.itmajakas.ee/api/weeks').then(response => {
    return response.json()
}).then(data => {
    data.forEach(weeks => {
        console.log(weeks)
        weeksDict[weeks.weekNr] = {
            'start': weeks.start,
            'end': weeks.end
        }
    })
})


console.log(teachersDict)
console.log(roomsDict)
console.log(groupDict)
console.log(weeksDict)
