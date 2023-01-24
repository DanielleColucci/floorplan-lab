import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bath from "./Bath"

const FloorPlan = () => {
  const bedrooms = [
    {
      id: 0, 
      bedNum: '1'}, 
    {
      id: 1, 
      bedNum: '2'},
    {
      id: 2, 
      bedNum: '3'}
  ]

  const baths = [
    {
      id: 0, 
      size: 'Half'
    },
    {
      id: 1,
      size: 'Full'
    }
  ]

  return (
    <>
      {bedrooms.map(bedroom => <Bedroom key={bedroom.id} bedNum={bedroom.bedNum}/>)}
      {baths.map(bath => <Bath key={bath.id} size={bath.size}/>)}
      <Kitchen />
      <LivingRoom />
    </>
  )
}

export default FloorPlan