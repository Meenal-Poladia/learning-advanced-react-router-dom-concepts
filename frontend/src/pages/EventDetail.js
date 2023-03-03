import React from 'react';
import {useRouteLoaderData, json, redirect} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
    const data = useRouteLoaderData("event-detail");

    return (
        <>
            <EventItem event={data.event}/>
        </>
    );
};

export default EventDetail;

export const loader = async({request, params}) => {
    const eventId = params.eventId;
    const response = await fetch("http://localhost:8080/events/" + eventId);
    if(!response.ok){
        throw json(
            {message: "Could not fetch details for selected routes"},
            {status: 500}
            )
    } else {
        return response
    }

}

export const deleteEventAction = async({params, request}) => {
    const eventId = params.eventId;
    const response = await fetch("http://localhost:8080/events/" + eventId, {
        method: request.method,
    })
    if(!response.ok){
        throw json(
            {message: "Could not delete event"},
            {status: 500}
        )
    }
    return redirect("/events");
}