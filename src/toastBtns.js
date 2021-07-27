import toast from '..src/toast/toast'

function addBtn () {
    let button = document.createElement('button')
    button.innerText = 'Toast'
    button.addEventListener('click', () => { toast('Hi Webpack!!') } )
    return button
}

export default addBtn;
