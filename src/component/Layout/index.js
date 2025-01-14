import "./layout.css"

// const style = {
//     container: {
//         backgroundColor: 'red',
//         height: '100vh',
//         width: '100vw',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     header: {
//         backgroundColor: 'aqua',
//         flex: 1,
//     },
//     main: {
//         backgroundColor: 'blue',
//         flex: 4,
//         display: 'flex',
//     },
//     left_box: {
//         flex: 3,
//         backgroundColor: 'bisque',
//     },
//     right_box: {
//         flex: 7,
//         backgroundColor: 'blueviolet',
//     },

//     footer: {
//         backgroundColor: 'grey',
//         flex: 1,
//     }


// }

function Layout() {
    return (
        <div className="container">
            <div className="header">

            </div>

            <div className="main">
                <div className='left-box'>

                </div>
                <div className='right-box'>

                </div>
            </div>

            <div className="footer">

            </div>
        </div>
    );
}

export default Layout;