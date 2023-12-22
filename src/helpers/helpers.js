const data = {
    id: 1,
    name: "John Smith",
    age: 23,
    isEmployed: false
}

// FUNCTIONS TO TEST
export function getId(data) {
    const { id } = data
    console.log(id)
    return id
}

export function getName(data) {
    const { name } = data
    console.log(name)
    return name
}

export function isMinor(data) {
    const { age } = data
    console.log(age<18)
    return age<18
}

export function sum(a, b) {
    return a + b;
}