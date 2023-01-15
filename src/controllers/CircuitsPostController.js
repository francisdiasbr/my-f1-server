module.exports = {
  store(req, res){
    console.log(req.body)
    // circuits.push(req.body)
    return res.status(200).json({ ok :true })
  }
}