export default class HelloWorld {

  constructor() {
  }

  static hello(greetingRecipient: string = 'World'): string {
    return 'Hello, ' + greetingRecipient + '!';
  }
}
