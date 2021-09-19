import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick = () =>{
        console.log('Wiedzmy')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='#f2bb45' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
      title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
