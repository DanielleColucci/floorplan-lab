import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bath from "./Bath"

const FloorPlan = () => {
  return (
    <>
      <Bedroom bedNum="1"/>
      <Kitchen />
      <Bedroom bedNum="2"/>
      <Bath size="Full"/>
      <LivingRoom />
      <Bath size="Full"/>
      <Bedroom bedNum="3"/>
    </>
  )
}

export default FloorPlan