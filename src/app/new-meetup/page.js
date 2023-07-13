"use client"
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

function NewMeetup(){
    function onAddMeetupHandler(addedMeetupData){
        console.log(addedMeetupData);
    }
    return(
        <>
            <h1>Create New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </>
    );
}

export default NewMeetup;