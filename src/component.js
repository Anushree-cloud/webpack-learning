import logo from './logo.svg';

function component (){
    let m = document.createElement('main')
    let p = document.createElement('p')
    let image = document.createElement('img')
    m.append(p)
    p.append(image)
    image.src = logo
    image.alt = 'sample logo'
    return m;
}

export default component;