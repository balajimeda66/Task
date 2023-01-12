const axios = require("axios");

// Function to call the match list API
async function getMatchList() {
  try {
    const response = await axios.get("143.198.116.255:7000/match-list", {
      params: {
        token: "test4dfsdfsfsdfsfsdgdfhfgjghjgjghj",
        sportId: "4",
      },
    });
    const matchList = response.data.matches;

    // Iterate through the match list and insert the data into the database
    for (let i = 0; i < matchList.length; i++) {
      const match = matchList[i];
      const { eventName, eventId, marketId } = match;
      const query = `INSERT INTO match_list (event_name, event_id, market_id) VALUES ('${eventName}', '${eventId}', '${marketId}')`;
      await client.query(query);
    }
  } catch (err) {
    console.error(err);
  }
}

// Function to call the match data API
async function getMatchData(marketId) {
  try {
    const response = await axios.get(
      `143.198.116.255:7000/match-data/${marketId}`,
      {
        params: {
          token: "test4dfsdfsfsdfsfsdgdfhfgjghjgjghj",
        },
      }
    );
    const { NAT, SID, MID } = response.data;
    console.log(NAT, SID, MID);
  } catch (err) {
    console.error(err);
  }
}

// Call the functions every ten minutes
setInterval(() => {
  getMatchList();
  getMatchData();
}, 600000);
