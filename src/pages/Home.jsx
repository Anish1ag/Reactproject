/* eslint-disable react/no-unescaped-entities */
import "./home.css";
function Home() {
  return (
    <div>
      <h1 style={{ marginLeft: "300px" }}>Bikes Available</h1>

      <br />
      <div className="flex">
        <div className="flex-container">
          <div className="bike">
            <div>
              <img src="./h2r.jpg" alt="none" height="400vh" width="400vw" />
              <h2 style={{ marginLeft: "40px" }}>Ninja H2R</h2>
            </div>
            <div>
              <img
                src="./zx10r.jpg"
                alt="none"
                height="400vh"
                width="400vw"
                style={{ marginLeft: "20px" }}
              />
              <h2 style={{ marginLeft: "40px" }}>Ninja ZX10R</h2>
            </div>
          </div>
          <div className="bike">
            <div>
              <img
                src="./duke.jpg"
                alt="none"
                height="400vh"
                width="400vw"
                style={{ marginLeft: "px" }}
              />
              <h2 style={{ marginLeft: "40px" }}>Super Duke 1290</h2>
            </div>
            <div>
              <img
                src="./bmw.jpg"
                alt="none"
                height="400vh"
                width="400vw"
                style={{ marginLeft: "20px" }}
              />
              <h2 style={{ marginLeft: "40px" }}>BMW S1000RR</h2>
            </div>
          </div>
        </div>
        <div className="desc" style={{ marginLeft: "10px" }}>
          <h2>Welcome to the Super Bike Emporium!</h2>
          <div style={{ color: "Green", fontWeight: "bold" }}>
            Here is where the roar of engines and the scent of burning rubber
            fill the air with excitement. Nestled in the heart of the city, our
            showroom stands as a beacon for enthusiasts and connoisseurs of
            high-performance motorcycles. As you step through the sleek glass
            doors, you're greeted by a symphony of revving engines and polished
            chrome. The showroom is a cathedral of speed, with spotlights
            illuminating each meticulously crafted machine like works of art on
            display. From the corner of your eye, you catch glimpses of iconic
            brands such as Ducati, Yamaha, Honda, Kawasaki, BMW, and more, each
            with its own corner dedicated to showcasing its finest creations.
            Carbon fiber fairings gleam under the lights, while titanium
            exhausts hint at the raw power that lies within. The layout of the
            showroom is a testament to the diversity and innovation of modern
            motorcycle design. On one side, you'll find the sleek lines and
            aggressive styling of sportbikes, designed for adrenaline-fueled
            track days and blistering acceleration. Ducati Panigales, Yamaha
            R1s, and Kawasaki Ninjas stand shoulder to shoulder, each promising
            an exhilarating ride like no other. Across the room, adventure and
            touring bikes beckon with promises of epic journeys and boundless
            exploration. BMW GS series, Honda Africa Twins, and Triumph Tigers
            stand ready to conquer any terrain, their rugged elegance hinting at
            the adventures that await beyond the horizon. For those who crave
            the retro charm and timeless appeal of classic motorcycles, a
            dedicated section pays homage to icons of the past. Triumph
            Bonnevilles, Harley-Davidson Sportsters, and Moto Guzzi V7s evoke a
            sense of nostalgia, their timeless designs capturing the essence of
            motorcycling's rich heritage. But the Super Bike Emporium is more
            than just a showroom—it's a haven for enthusiasts, a gathering place
            where riders can share stories, swap tips, and immerse themselves in
            the vibrant culture of two-wheeled freedom. Knowledgeable staff
            members stand ready to assist, offering expert guidance and
            personalized recommendations to help you find the perfect ride for
            your needs. Whether you're a seasoned rider seeking the ultimate
            thrill or a newcomer eager to experience the open road for the first
            time, the Super Bike Emporium invites you to embark on a journey
            like no other—one fueled by passion, precision, and the relentless
            pursuit of excellence. track days and blistering acceleration.
            Ducati Panigales, Yamaha R1s, and Kawasaki Ninjas stand shoulder to
            shoulder, each promising an exhilarating ride like no other. Across
            the room, adventure and touring bikes beckon with promises of epic
            journeys and boundless exploration. BMW GS series, Honda Africa
            Twins, and Triumph Tigers stand ready to conquer any terrain, their
            rugged elegance hinting at the adventures that await beyond the
            horizon. For those who crave the retro charm and timeless appeal of
            classic motorcycles, a dedicated section pays homage to icons of the
            past. Triumph Bonnevilles, Harley-Davidson Sportsters, and Moto
            Guzzi V7s evoke a sense of nostalgia, their timeless designs
            capturing the essence of motorcycling's rich heritage. But the Super
            Bike Emporium is more than just a showroom—it's a haven for
            enthusiasts, a gathering place where riders can share stories, swap
            tips, and immerse themselves in the vibrant culture of two-wheeled
            freedom. Knowledgeable staff members stand ready to assist, offering
            expert guidance and personalized recommendations to help you find
            the perfect ride for your needs. Whether you're a seasoned rider
            seeking the ultimate thrill or a newcomer eager to experience the
            open road for the first time, the Super Bike Emporium invites you to
            embark on a journey like no other—one fueled by passion, precision,
            and the relentless pursuit of excellence.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
