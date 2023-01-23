import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const FloorPlan = () => {
  return (
    <>
      <Bedroom bedNum="1"/>
      <Bedroom bedNum="2"/>
      <Bedroom bedNum="3"/>
      <Kitchen />
      <LivingRoom />
    </>
  )
}

export default FloorPlan