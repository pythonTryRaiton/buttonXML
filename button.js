let button = document.createElement('button')
button.id = 'buttonXML'

function clickTest() {
    const requestURL = "https://www.gismeteo.ru/weather-perm-4476/now/"
    const xhr = new XMLHttpRequest()

    xhr.open('GET', requestURL)
    xhr.onload = () => {
        console.log(xhr.response)
    }

    xhr.send()

}


button.onclick = clickTest;

button.textContent = 'XML'
button.style.background = '#4CAF50'
button.style.color = 'white'
button.style.padding = '8px 16px'
button.style.borderRadius = '4px'
button.style.boxShadow = '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)'

button.style.position = 'relative'
button.style.display = "flex"
button.style.bottom = "500px"
button.style.top = "-525px"
button.style.left = "1500px"

document.body.appendChild(button)