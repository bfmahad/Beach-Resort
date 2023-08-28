import React from 'react';
// Components
// import Title from '../Components/Title';
import FilterRooms from '../Components/FilterRooms';
import RoomList from '../Components/RoomList';
import Loading from '../Components/Loading';
// Context API
import { withRoomConsumer } from '../Context';

const RoomsContainer = ({context}) => {

    // Destructuring
    const {loading, rooms, sortedRooms} = context;

    if(loading){
        return <Loading />;
    }

    return (
        <>
            <FilterRooms rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomsContainer);

// import React from 'react';
// // Components
// import Title from '../Components/Title';
// import FilterRooms from '../Components/FilterRooms';
// import RoomList from '../Components/RoomList';
// import Loading from '../Components/Loading';
// // Context API
// import { RoomConsumer } from '../Context';

// export default function RoomsContainer() {

//     return(
//         <RoomConsumer>
//             {value => {

//                 // Destucturing
//                 const {loading, rooms, sortedRooms} = value;

//                 if(loading){
//                     return <Loading />;
//                 }

//                 return (
    
//                     <>
//                         <Title title="Hello" />
//                         <FilterRooms rooms={rooms} />
//                         <RoomList rooms={sortedRooms} />
//                     </>
                
//                   )

//             }}
//         </RoomConsumer>
//     )
  
// }