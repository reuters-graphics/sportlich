class Sportlich {
  greet(name, happy = false) {
    return `Hello, ${name}${happy ? '!' : '.'}`;
  }
}

export default Sportlich;
