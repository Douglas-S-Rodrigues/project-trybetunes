// import React from 'react';
// import { getUser } from '../services/userAPI';
// import Loading from '../pages/Loading';

// class Header extends React.Component {
//   constructor() {
//     super();
//     this.state({
//       usarName: '',
//       loading: false,
//     });
//   }

//   logUser = async () => {
//     this.setState({
//       loading: true,
//     });
//     const { userName } = this.state;
//     await getUser({ user: userName });
//     this.setState({
//       loading: false,
//     });
//   }

//   render() {
//     const {
//       loading,
//       userName,
//     } = this.state;

//     return (
//       <div>
//         {
//           loading
//             ? <Loading /> : (
//               <header data-testid="header-component">
//                 <p>{ userName }</p>
//               </header>
//             )
//         }
//       </div>
//     );
//   }
// }

// export default Header;
