const hotelService = require('../service/hotelService'); // make sure this path is correct

router.post("/recommend", async (req, res) => {
  const { location, budget } = req.body;
  const hotels = await hotelService.getRecommendations(location, budget);
  res.render("results", { hotels });
});

module.exports = router;
