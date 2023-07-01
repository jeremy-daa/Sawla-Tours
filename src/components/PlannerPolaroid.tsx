import Ertaale from "../assets/erta_ale_1.jpg";

const PlannerPolaroid = () => {
  return (
    <div className="polaroid-parent" data-aos="fade-up">
      <h1 className="title">How to Plan Your Next Trip</h1>
      <div className="polaroid-container">
        <div className="polaroid">
          <img src={Ertaale} alt="planner" />
          <div>
            <h1 className="polaroid-title">1. Choose Your Destination</h1>
            <p className="polaroid-description">
              Research and identify potential destinations based on your
              preferences, interests, and travel goals.
              <br />
              <br />
              Explore our destination options, itineraries, and packages to
              gather information and ideas.
            </p>
          </div>
        </div>
        <div className="polaroid">
          <img src={Ertaale} alt="planner" />
          <div>
            <h1 className="polaroid-title">2. Itinerary Customization</h1>
            <p className="polaroid-description">
              Determining the duration of your trip and creating a rough
              itinerary outlining the activities and sights you wish to
              experience.
              <br />
              <br />
              You can customize your itinerary by selecting specific activities,
              accommodations, transportation options, and any additional
              services you may require.
            </p>
          </div>
        </div>
        <div className="polaroid">
          <img src={Ertaale} alt="planner" />
          <div>
            <h1 className="polaroid-title">3. Booking and Logistics</h1>
            <p className="polaroid-description">
              Finalize your travel dates and make the necessary reservations for
              flights, accommodations, and transportation.
              <br />
              <br />
              We will handle all the logistics and ensure that your trip is well
              organized and hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlannerPolaroid;
