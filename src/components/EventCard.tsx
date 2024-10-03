import { CSSProperties } from "react"
import { CUSTOM_EVENTS } from "../static"
import { findTotalMinutes } from "../utils"

const MIN_HEIGHT_FROM_TOP = 69
export const EventCard = ({ event, zIndex }: { event: CUSTOM_EVENTS, zIndex: number }) => {


    const eventHeight = () => {
        //find minutes between start and end
        const totalStartMinutes = findTotalMinutes(event.start)
        const totalEndMinutes = findTotalMinutes(event.end)
        return `${totalEndMinutes - totalStartMinutes}px`
    }

    const eventTopHeight = () => {
        const totalStartMinutes = findTotalMinutes(event.start)
        return `${MIN_HEIGHT_FROM_TOP + totalStartMinutes}px`
    }
    const style: CSSProperties = {
        height: eventHeight(),
        right: `${190}px`,
        top: eventTopHeight(),
        width: `${600 / zIndex}px`,
        zIndex: zIndex
    }

    return <div className={`event__box ${event.priority}`} style={style} >
        <h2>{event.title}</h2>
        <div className="event__time">

        </div>

    </div>
}