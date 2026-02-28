//  A -> B

class B {
	gethowToGreet() {
		console.log("こんにちは")
	}
}


class A {
	greet()  {
		const b = new B();

		const greetingMessage  = b.gethowToGreet()

		console.log(greetingMessage)
	}
}

const a = new A()
a.greet()


// A → IB ← B

interface IB {
	greet(): string
}

class B_b implements IB{
	greet() {
		return "こんにちは"
	}
}

class A_a {
	b: IB

	constructor(b: IB) {
		this.b = b
	}

	greet() {
		const greetingMessage = this.b.greet();
		console.log(greetingMessage)
	}
}

const b = new B_b();
const a_a = new A_a(b)

a_a.greet()