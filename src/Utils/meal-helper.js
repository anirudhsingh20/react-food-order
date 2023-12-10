const baseUrl = 'http://localhost:3000'

export const getMeals = async function () {
    const res = await fetch(`${baseUrl}/meals`);
    const meals = await res.json();
    return meals;
}

export const placeOrder = async function (data) {
    const res = await fetch(`${baseUrl}/orders`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const resData = await res.json();

    return resData;
}