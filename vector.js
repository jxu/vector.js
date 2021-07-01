// Simple Vector class, extending built-in Arrays
class Vector extends Array {
    // Create Vector by unpacking Array passed in
    // Note: passing in length 1 Array creates length 1 Vector
    constructor(array) {
        console.assert(Array.isArray(array),
            `Vector constructor expected Array, got ${array}`);

        // Handle special case of length 1 array
        if (array.length === 1) {
            super();
            this.push(array[0]);
        }
        else
            super(...array);
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
