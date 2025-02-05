exports.order = function order(req, res, next) {
  // TODO implement from here
  console.log(req.body);

  let total = 0;

  req.body.prices.map((price, key) => {
      console.log("total :", total, "price :", price, "quantity :", req.body.quantities[key])
      total += (price * req.body.quantities[key])
  });
  console.log("without reduction", total)

  if(total >= 1000) {
    total = total - (total * 3 /100)
  }
  console.log("with reduction", total)

  res.status(200).json({total: total});
}

exports.feedback = function feedback(req, res, next) {
  console.info("FEEDBACK:", req.body.type, req.body.content);
  next();
}
