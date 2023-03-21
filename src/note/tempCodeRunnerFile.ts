function ExpensiveWebCall(time: number): Promise<void> {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

class MyWebService {
  CallExpensiveWebOperation() : void {
    ExpensiveWebCall(4000).then(() => console.log(`Finished web service`)
    ).catch(() => console.log(`Expensive web call failure`))
  }
}