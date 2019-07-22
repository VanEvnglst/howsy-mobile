import { StyleSheet } from 'react-native'
import Metrics from '../assets/constants/Metrics';

export default StyleSheet.create({
  cardContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    height: 300,
  },
  imageContainer: {
    marginTop: 20,
    width: '90%',
    height: '70%',
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  engagementContainer: {
    marginVertical: 10,
    width: '95%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  engagement: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfile: {
    alignSelf: 'center', 
    width: '90%', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    height: 45, 
    marginTop: 3,
    flexDirection: 'row'
  },
  profile: {
    width: 25,
    height: 25,
    borderRadius: 13,
    marginHorizontal: 5
  },
  profileName: {
    color: Metrics.black,
    fontSize: 16,
    width: '90%'
  },
  engagementText: {
    color: Metrics.gray,
    fontSize: 14,
  },
  icons: {
    width: 20,
    height: 20,
    marginRight: 4
  },
  imageModal: {
    height: '60%', 
    width: '90%', 
    marginHorizontal: 10, 
    marginTop: 10,
  },
  modalContainer: {
    height: '50%', 
    backgroundColor: 'white', 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
});
