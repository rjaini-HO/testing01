const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Financial year check yes and no
router.post('/3_FY-1', function (req, res)
  {
    const selectedOption = req.body['fy-year']
     let error = {}
     if (!selectedOption) {
       error = { text: "Select an option" }
      return res.render("3_FY-1", { error })}

     // Make a variable and give it the value from 'fy-year'
     var fyyear = req.session.data['fy-year']

     // Check whether the variable matches a condition
     if (fyyear == "yes"){
       // Send user to next page
       res.redirect('/4_before_you_start')
     }
     else {
       // Send user to ineligible page
       res.redirect('/3_FY-1-No')
     }
   })

// PDF document delete check yes and no
router.post('/6S1-3-FY-PDF/S13-4-DeleteConfirm', function (req, res)
  {
    const selectedOption = req.body['delete-document']
     let error = {}
     if (!selectedOption) {
       error = { text: "Select an option" }
      return res.render("6S1-3-FY-PDF/S13-4-DeleteConfirm", { error })}

     // Make a variable and give it the value from 'fy-year'
     var deletedoc = req.session.data['delete-document']

     // Check to confirm the deletion
     if (deletedoc == "yes"){
       // Send user to next page
       res.redirect('/6S1-3-FY-PDF/S13-5-Deleted')
     }
     else {
       // Cancelling the deletion
       res.redirect('/6S1-3-FY-PDF/S13-5B-Deleted')
     }
   })


// Scoping check yes and no
router.post('/6S1-2-Scoping/S12-1-ScopingQ', function (req, res)
{
  const selectedOption = req.body['scoping']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("6S1-2-Scoping/S12-1-ScopingQ", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var scopingconfirm = req.session.data['scoping']

  // YES, company has to subnit the statement
  if (scopingconfirm == "yes"){
    // Send user to next page
    res.redirect('/6S1-2-Scoping/S12-3-YesConfirm')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/6S1-2-Scoping/S12-2-NoSelection')
  }
})


// Scoping NO check boxes - conditions
router.post('/6_S1_1-2-1_MSSR', function (req, res)
{
  const selectedOption = req.body['scopingNo']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("6_S1_1-2-1_MSSR", { error })}

  // Make a variable and give it the value from 'fy-year'
  var scopingNOconfirm = req.session.data['scopingNo']

  // Check whether the variable matches a condition
  if (scopingNoconfirm == "yes"){
    // Send user to next page
    res.redirect('/6_S1_1-2A-1_MSSR')
  }
  else {
    // Send user to ineligible page
    res.redirect('/6_S1_1-2-1_MSSR')
  }
})

module.exports = router
