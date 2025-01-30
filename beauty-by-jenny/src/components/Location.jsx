import React from 'react';

function Location() {
  return (
    <div className='w-full backgroundColor p-10 flex flex-col items-center'>
      <h1>Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13210.143108322067!2d-117.92577764458005!3d34.132632400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32786a7a93f7f%3A0x7f14bdce2864fad7!2sChic%20Beauty%20Salon!5e0!3m2!1sen!2sus!4v1738276261855!5m2!1sen!2sus"
        width="300"
        height="250"
        style={{ border: 0 }} 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
