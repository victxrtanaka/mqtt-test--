import MQTTSingleton from "../lib/mqttSingleton.js"

/**
 * Toggle the led on our board
 * @param {*} req
 * @param {*} res
 */
export const startProp4 = (req, res) => {
  try {
    MQTTSingleton.getClient().publish('startProp4');
    res.status(200).send('Prop 4 toggled');
  } catch(e) {
    console.error(e)
  }
}

// /**
//  * Ask for the LED state
//  * @param {*} req
//  * @param {*} res
//  */
// export const propState = (req, res) => {
//   try {
//     MQTTSingleton.getClient().subscribeOnce('prop4/getPropState').then((message) => {
//       res.status(200).json({ ledState: message });
//     });
//     MQTTSingleton.getClient().publish('prop4/getPropState');
//   } catch(e) {
//     console.error(e)
//   }
// }