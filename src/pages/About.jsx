// import Array from "../components/Array";
import "./about.css";
import Invitationcard from "../components/card/invitationcard";
function About() {
  const abc = [
    {
      name: "||श्री गणेशाय नमः||",
    },
  ];
  return (
    <div className="overall">
      <div className="cover">
        <div className="invitation">
          {abc.map((abc, index) => (
            <Invitationcard key={index} name={abc.name}>
              {abc.desc}
              मङ्गलम् भगवान विष्णुः मङ्गलम् गरुणध्वजः। मङ्गलम् पुण्डरी काक्षः
              मङ्गलाय तनो हरिः॥
              <div className="info">
                <div>
                  <h2>वर:</h2>
                  <h2>असिम चौलागाईं</h2>
                  सूर्यविनायक-५, भक्तपुर <br />
                  पेशा: वेब विकासकर्ता <br />
                </div>
                <div>
                  <img src="sign.png" alt="" />
                </div>
                <div>
                  <h2>वधु:</h2>
                  <h2>सर्वदा सञ्जेल</h2>
                  फर्पिङ–४, काठमाडौं <br />
                  पेशा: वेब विकासकर्ता <br />
                </div>
              </div>
              <div className="img3">
                <img
                  src="./subha.png"
                  alt=""
                  height={"310px"}
                  width={"820px"}
                />
              </div>
              <div>
                हाम्रो आयुष्मन सुपुत्र श्री असिम चौलागाईं (रमेश चौलागाईं तथा
                सबिना चौलागाईंको सुपुत्र)को
                <br /> फर्पिङ्ग-४, काठमाडौँ निवासी श्री संजेल तथा श्रीमती संजेल
                कि सुपुत्री सर्बधा संजेलका <br /> साथ सु-सम्पन्न हुने
                शुभ-बिबाहमा यहाँहरुको गरिमामय उपस्थिति भइ वर वधुलाई आशिर्बाद
                प्रधान गरिदिनुहुन <br />
                <h3>यहाँहरुलाई सादर निमन्त्रणा गर्दछौ।।</h3>
              </div>
              <div className="img4">
                <img src="./line.png" alt="" height={"200px"} width={"820px"} />
              </div>
              <div className="whole">
                <div className="bibah">
                  <div>
                    <h3>वैवाहिक कार्यक्रम </h3>
                    <h4>||जन्ती स्थान|| </h4>
                    स्थान : रोम, इटाली <br />
                    (गन्तव्य विवाह) <br />
                    मिति : २०८०/११/२४, बेहिबार <br />
                    समय : बिहान ८ बजे
                  </div>
                  <div>
                    <h3>दर्संभिलासी </h3>
                    श्री सुशन लामिछाने <br />
                    श्रीमती रोशनी लामिछाने <br />
                    श्री प्रशान्त कसुला <br />
                    श्री मिलन सापकोटा <br />
                    श्री अनिश घोरसैने
                  </div>
                  <div>
                    <h3>प्रार्थी </h3>
                    श्री हजुरबा चौलागाईं <br />
                    श्रीमती हजुरआमा चौलागाईं
                  </div>
                </div>
              </div>
            </Invitationcard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
