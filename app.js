const profiles = [
    {
        name: 'Micheal Smith',
        age: 28,
        gender: 'Male',
        lookingfor: 'Female',
        hobbies: 'Travelling',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
        name: 'Annie Pipper',
        age: 26,
        gender: 'Female',
        lookingfor: 'Male',
        hobbies: 'Hiking, Singing, Dancing, Reading interesting literature',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/30.jpg',
    },
    {
        name: 'Josh Chan',
        age: 29,
        gender: 'Male',
        lookingfor: 'Female',
        hobbies: 'Watching Sports',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/80.jpg',
    },
    {
        name: 'Felicity Smoke',
        age: 30,
        gender: 'Female',
        lookingfor: 'Male',
        hobbies: 'Travelling, Dancing.',
        location: 'Toronto CN',
        image: 'https://randomuser.me/api/portraits/women/60.jpg',
    },
    {
        name: 'Kris August',
        age: 24,
        gender: 'Male',
        lookingfor: 'Female',
        hobbies: 'Coding, Travelling, Reading.',
        location: 'Austin TX',
        image: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
        name: 'Sara Black',
        age: 32,
        gender: 'Female',
        lookingfor: 'Male',
        hobbies: 'Reading, Biking, Singing.',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
]

// Initialize the iterator and pass in the profiles data
const profile = profileIterator(profiles)

// Display the first profile by default
nextProfile()

// Next Event
document.querySelector('#next').addEventListener('click', nextProfile)

// Next profile function
function nextProfile() {
    const currentProfile = profile.next().value
    console.log(currentProfile)

    if (currentProfile !== undefined) {
        document.querySelector('#profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Gender: ${currentProfile.gender}</li>
                <li class="list-group-item">Hobbies: ${currentProfile.hobbies}</li>
                <li class="list-group-item">Preference: ${currentProfile.lookingfor}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>
        `

        document.querySelector('#imageDisplay').innerHTML = `
            <img src=${currentProfile.image}>
        `
    } else {
        window.location.reload()
        // Reload the page if we hit the last item on the array
    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0

    return {
        next: function () {
            return nextIndex < profiles.length
                ? { value: profiles[nextIndex++], done: false }
                : { done: true }
        },
    }
}
