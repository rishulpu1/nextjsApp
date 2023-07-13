import MeetupList from "../../components/meetups/MeetupList"

export default function Home() {
  const DUMMY_MEETUPS = [
    {
      id: 'e1',
      title: 'First Meetup',
      image: 'https://rajneeshk.in/images/projects/eascost/thumb.jpg',
      address: 'Fl 5C Panorama Floor',
      description: 'This is first meetup'
    },
    {
      id: 'e2',
      title: 'Second Meetup',
      image: 'https://rajneeshk.in/images/projects/greeninvestment/Green-Investment.jpg',
      address: 'Fl 6C Panorama Floor',
      description: 'This is second meetup'
    }
  ];
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </div>
    
  )
}
