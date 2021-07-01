// Simple Vector class, extending built-in Arrays
class Vector extends Array {
    // Unpack if Array is passed in, otherwise just use Array constructor
    constructor(...args) {
        (args.length === 1 && Array.isArray(args[0]))
            ? super(...args[0])
            : super(...args);
    }

    // Add another Vector elementwise.
    add(other) {
        return this.map((e, i) => e + other[i]);
    }

    // Subtract another Vector elementwise.
    sub(other) {
        return this.map((e, i) => e - other[i]);
    }

    // Multiply another Vector elementwise (Hadamard product).
    mul(other) {
        return this.map((e, i) => e * other[i]);
    }

    // Sum elements to produce a single result.
    sum() {
        return this.reduce((a, b) => a+b);
    }

    // Scale all elements by s.
    scale(s) {
        return this.map(e => s*e);
    }

    // Dot product with another Vector.
    dot(other) {
        return this.mul(other).sum();
    }

    // Compute Euclidean norm.
    norm() {
        return Math.sqrt(this.dot(this));
    }

    // Normalize Vector into a unit vector (norm 1).
    unit() {
        return this.scale(1 / this.norm());
    }
}
