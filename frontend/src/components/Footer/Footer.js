import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer>
        <div class="content">
          <div class="left box">
            <div class="upper">
              <div class="topic">About</div>
              <p>this is a testing footer for about section</p>
            </div>
          </div>
          
          <div class="middle box">

            <img class="logo2" src="" />
          </div>

          <div class="right box">
            <div class="topic">Contact</div>
            <div class="phone">
              <a href="#"><i class="fas fa-phone-volume"></i>+962-78-6682097</a>
            </div>
            <div class="email">
              <a href=""><i class="fas fa-envelope"></i>ahmad.h.qadoura@gmail.com - basil</a>
            </div>
            <div class="bottom bot">
              <p>Copyright © 2022 <a href="#"> Basil Labadi ,Ahmad Qadoura </a> All rights reserved</p>
            </div>
        </div>
     </div>
       
      </footer>
  )
}

export default Footer