import React, { useEffect, useState } from "react";
import "../src/Card.css";
export default function Card() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Best Of Paris In 7 Days Tour",
      img: "https://hikerwolf.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-06-at-1.55.41-PM.jpeg",
      msg: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    },
    {
      id: 2,
      name: "Best Of Ireland In 14 Days Tour",
      img: "https://www.honeymoonbug.com/blog/wp-content/uploads/2019/08/mirihi-island-maldives-min.jpg",
      msg: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    },
    {
      id: 3,
      name: "Best Of Salzburg & Vienna In 8 Days Tour",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2018%2F11%2Fferry-boat-maldives-BUDGETMALDIVES0818.jpg",
      msg: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    },
    {
      id: 4,
      name: "Best Of Poland In 10 Days Tour",
      img: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2018/01/jade6.jpg",
      msg: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    },
    {
      id: 5,
      name: "Best Of Ireland In 14 Days Tour",
      img: "https://luxurylifestyleawards.com/wp-content/uploads/2022/07/DJI_0985.jpg",
      msg: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    },
    {
      id: 5,
      name: "Best Of Ireland In 14 Days Tour",
      img: "https://luxurylifestyleawards.com/wp-content/uploads/2022/07/DJI_0985.jpg",
      msg: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    },
  ]);
  const [msg, setMsg] = useState("Our Tours");
  const [btn, setBtn] = useState();
  const hadlerClick = (id) => {
    // console.log(cards);
    let newCards = cards.filter((items) => items.id !== id);
    setCards(newCards);
    // setMsg("N0 Tours Left!!!");
    console.log(cards[0].id);
    setMsg(cards[0].id + " " + "Tour Left!!!");
    if (cards[0].id === 5) {
      setMsg("No Tours Left!!");

      //bellow i want  button can i write like these
      // setMsg(
      //   "No Tours Left!!! ",
      //   <button>
      //     <a href="http://localhost:3000/">Refresh</a>
      //   </button>
      // );
    }
  };
  useEffect(() => {
    // setBtn(<button>Hello</button>);
    if (msg === "No Tours Left!!") {
      setBtn(
        <button className="btn btn-danger">
          <a href="http://localhost:3000/">Refresh</a>
        </button>
      );
    }
  });
  return (
    <div className="container">
      <div className="title">
        <h2>{msg}</h2>
        <div className="underline "></div>
        <br />
        <p style={{ marginLeft: "100px" }}>{btn}</p>
      </div>
      <div className="cards-container">
        {cards.map((items) => {
          const { id, name, img, msg } = items;
          return (
            <div key={id}>
              <div className="cards">
                <div className="card-heading">
                  <h2 className="card-title">{name}</h2>
                </div>
                <div className="card-body">
                  <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="card-footer">
                  <p>{msg}</p>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-outline-danger p-2"
                    onClick={() => hadlerClick(id)}
                  >
                    Not Intrested
                  </button>
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
