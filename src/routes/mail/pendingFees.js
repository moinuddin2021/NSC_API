const nodemailer = require("nodemailer");
const {USER, PASSWORD} = require('../../../constant')

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,

    auth: {
      user: USER, // email
      pass: PASSWORD, //password
    },
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      return;
    }
  });
};
// send email
const PendingSender = ({ email, full_name, studentID }) => {
  const options = {
    from: `Nasir Sir Classes 👨‍🏫 <${USER}>`,
    to: `${email}`,
    subject: "Pending Fees",
    html: `
        <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
           <div style="width: 100%; background-color: #ADD8E6; padding: 20px 0">
          <a href="" ><img
              src="https://res.cloudinary.com/doagkfdns/image/upload/v1666102288/Nasir/logo_vhv2gr.png"
              style="width: 100%; height: 70px; object-fit: contain"
            /></a> 
          
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="color:red;font-weight: 800; font-size: 1.2rem; padding: 0 30px">
                    Please Pay your Fees
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
            <h2> Student ID : ${studentID} </h2>
            <h2> Hello, ${full_name.toUpperCase()} </h2>
            <p>We hope you're doing well. Kindly note that your Fees is pending. We are a little concerned that we haven't received payment from you yet. If you have any questions or concerns, please don't hesitate to contact us .</p>
           
             <p style="font-weight:800">Thank You   </p>
              <p style="font-weight:800" >Team Nasir Sir</b></p>
            </div>
          </div>
        </div>
      </div>
        `,
  };
  Email(options);
};
module.exports = PendingSender;
