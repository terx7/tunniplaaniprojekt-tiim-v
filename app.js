let teachersDict = {}
let roomsDict = {}
let groupDict = {}
let weeksDict = {}
const currentWeek = 9
const groups = document.querySelector('#groups')




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
        let newDiv = document.createElement("option")
        newDiv.innerHTML = "<option value=" + group.groupId + ">" + groupDict[group.groupId] + "</option>"
        groups.appendChild(newDiv)

    });
})

fetch('https://be.ta19heinsoo.itmajakas.ee/api/weeks').then(response => {
    return response.json()
}).then(data => {
    data.forEach(weeks => {
        weeksDict[weeks.weekNr] = {
            'start': weeks.start,
            'end': weeks.end
        }
    })
})



function getLesson() {
    console.log(groupName.value)
    console.log(groupDict)
    if (parseInt(groupName.value) in groupDict) {
        console.log("yep")
    }
    console.log(Object.keys(groupDict))
    for (let x = 0; x < Object.keys(groupDict).length; x++) {
        const element = groupDict[x];
        console.log(groupDict[x])

    }
}

function datetime() {
}


console.log(teachersDict)
console.log(roomsDict)
console.log(groupDict)
console.log(weeksDict)
