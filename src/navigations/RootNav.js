import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// import app from './MemberNav'
import GuestNav from './GuestNav'

const RootNavigator = createSwitchNavigator({
    GuestNav: GuestNav,
    // app : app
},
{
    initialRouteName: 'GuestNav'
}
)

export default createAppContainer(RootNavigator)