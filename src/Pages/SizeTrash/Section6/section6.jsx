import styles from './Section6.css'
import money from './../../../asset/Money.png'
import bike from './../../../asset/bike.png'
import truck from './../../../asset/Truck.png'
import map from './../../../asset/map.png'

import React from "react";
const Sections6 = () => {

    return(
      <div className={styles.mainContainer}>
          <div>
              <p className={styles.text}>SIZE OF TRASH</p>
              <div className={styles.pics}>
                  <img src={money} alt="money" className={styles.money}/>
                  <img src={bike} alt="bike" className={styles.bike}/>
                  <img src={truck} alt="truck" className={styles.truck}/>
              </div>
              <div className={styles.map}>
                  <img src={map} alt="map" className={styles.map}/>

              </div>
          </div>

      </div>
    )


}
export default Sections6;