/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-21 16:50:39
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-03-21 17:15:58
 */

function ExpensiveWebCall(time: number): Promise<void> {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

class MyWebService {
  async CallExpensiveWebOperation() {
    try {
      await ExpensiveWebCall(4000);
      console.log(`Finished web service`)
    } catch (error) {
      console.log(`Caught ${error}`);
    }
  }
}