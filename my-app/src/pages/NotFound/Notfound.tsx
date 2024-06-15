import './notfound.scss'
export const NotFound = () => {
    return (
        <div className='notfound-container'>
            <div className='notfound-name'>Вы попали на страницу, которой не существует :(</div>
            <div className='notfound-pic'>
                <img src="/nf.jpg" alt="not-found" />
            </div>
        </div>
    )
}